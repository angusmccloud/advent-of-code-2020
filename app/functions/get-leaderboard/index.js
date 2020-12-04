'use strict';
let rp = require('request-promise').defaults({ simple: false });
const AWS = require('aws-sdk');
const uuid = require('uuid');
AWS.config.setPromisesDependency(require('bluebird'));
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const getLeaderboardJSON = async () => {
  const timestamp = new Date().getTime();
  const currentData = await dynamoScanAllRows();
  // console.log(currentData);
  let result;
  if(currentData[0] !== undefined) {
    const lastUpdatedTime = currentData[0].updatedTime;
    if(timestamp - lastUpdatedTime > 15 * 60 * 1000) { // 15 minutes (in milliseconds)
      result = await getLatestLeaderboard(currentData[0].leaderboardId);  
      console.log('Fetching new data');
    } else {
      result = JSON.parse(currentData[0].leaderboardObject);
      console.log('Using cached data');
    }
  } else {
    // Need to handle the first time it runs, gets no results, and so there's no timestamp to compare to
    result = await getLatestLeaderboard(currentData[0].leaderboardId);  
    console.log('Fetching new data');
  }
  return result;
};

module.exports = getLeaderboardJSON;

const getLatestLeaderboard = async (currentId) => {
  const cookie = process.env.AOC_COOKIE;
  const url = process.env.AOC_URL;

  console.log('Fetching AOC Leaderboard Data', url);
  var options = {
    method: 'GET',
    uri: url,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'cookie': cookie
    },
  };
  // console.log("Options", options);
 
  let response;
  let goodResult = false;
  while(!goodResult) {
    await rp(options)
      .then(function (parsedBody) {
        // console.log("Data fetched successfully");
        response = JSON.parse(parsedBody);
        const timestamp = new Date().getTime();
        const leaderboardObject = {
          leaderboardId: uuid.v1(),
          leaderboardObject: parsedBody,
          createdTime: timestamp,
          updatedTime: timestamp,
          activeFlag: true
        }
        deleteOldLeaderboard(currentId); // Disable old record
        insertLeaderboard(leaderboardObject); // Insert new record
        goodResult = true;
      })
      .catch(function (err) {
        console.log("Data Fetch Failed", url);
        console.log(err);
        response = false;
        setTimeout(1000); // Wait 1 second and try again... (maybe remove this since we know the cookie will expire)
      });
  }

  return response;
}

const dynamoScanAllRows = async (tableName = process.env.LEADERBOARD_TABLE, fields = 'leaderboardId, leaderboardObject, createdTime, updatedTime', filterExpression = `activeFlag = :active`, expressionAttributeValues = {':active': true}, tableUniqueKey = 'leaderboardId') => {
  console.log('Fetching All Data from DynamoDB Table');
  let fetchMoreData = true;
  let allRows = [];
  let startKey;
  let params;

  while (fetchMoreData){
    if (!startKey) {
      params = {
        TableName: tableName,
        ProjectionExpression: fields,
        FilterExpression: filterExpression,
        ExpressionAttributeValues: expressionAttributeValues
      };
    } else {
      params = {
        TableName: tableName,
        ProjectionExpression: fields,
        FilterExpression: filterExpression,
        ExpressionAttributeValues: expressionAttributeValues,
        ExclusiveStartKey: { [tableUniqueKey]: startKey }
      };
    }

    // console.log('-- Filter Expression --', filterExpression);
    // console.log('-- Expression Attribute Filters --', expressionAttributeValues);
    // console.log('-- params --', params);

    const result = await dynamoDb.scan(params).promise();
    let thisResult = result.Items;
    allRows = allRows.concat(thisResult);
    if(result.LastEvaluatedKey){
      startKey = result.LastEvaluatedKey[tableUniqueKey];
    } else {
      fetchMoreData = false;
    }
  }

  return allRows;
};

const insertLeaderboard = (contentObject) => {
  // console.log('Submitting Movie', contentObject);
  const dataInfo = {
    TableName: process.env.LEADERBOARD_TABLE,
    Item: contentObject,
  };
  return dynamoDb.put(dataInfo).promise()
    .then(res => contentObject.leaderboardId);
};

const deleteOldLeaderboard = (leaderboardId) => {
  console.log('Soft-Deleting Old Leaderboard');
  const timestamp = new Date().getTime();
  const imageInfo = {
    TableName: process.env.LEADERBOARD_TABLE,
    Key: {
      "leaderboardId": leaderboardId
    },
    UpdateExpression: "set activeFlag = :active, updatedTime = :time",
    ExpressionAttributeValues: {
      ":active": false,
      ":time": timestamp,
    }
  };
  return dynamoDb.update(imageInfo).promise()
    .then(res => timestamp);
};
