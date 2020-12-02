'use strict';

const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { upperCaseFirst } = require('upper-case-first');
const he = require('he');

const day1Data = require('../functions/day-1/source-data');
const sumTwoValues = require('../functions/day-1/sum-two-values');
const sumThreeValues = require('../functions/day-1/sum-three-values');

module.exports.tester = async () => { 
  const timestamp = new Date().getTime(); 

  // Day 1
  const inputData = await day1Data();
  console.log('-- Question 1 --');
  let result = await sumTwoValues(inputData, 2020);
  console.log(result);
  console.log('-- Question 2 --');
  result = await sumThreeValues(inputData, 2020);
  console.log(result);
  
};
