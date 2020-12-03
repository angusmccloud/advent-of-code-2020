'use strict';

const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { upperCaseFirst } = require('upper-case-first');
const he = require('he');

const day1Data = require('../functions/day-1/source-data');
const sumTwoValues = require('../functions/day-1/sum-two-values');
const sumThreeValues = require('../functions/day-1/sum-three-values');

const day2Data = require('../functions/day-2/source-data');
const countValidPasswords = require('../functions/day-2/count-valid-passwords');
const countValidPasswordsV2 = require('../functions/day-2/count-valid-passwordsv2');

const day3Data = require('../functions/day-3/source-data');
const countTrees = require('../functions/day-3/count-trees');

module.exports.tester = async () => { 
  const timestamp = new Date().getTime(); 

  // Day 1
  // const inputDataDay1 = await day1Data();
  // console.log('-- Day 1, Question 1 --');
  // console.log(await sumTwoValues(inputDataDay1, 2020));
  // console.log('-- Day 1, Question 2 --');
  // console.log(await sumThreeValues(inputDataDay1, 2020));
  
  // Day 2
  // const inputDataDay2 = await day2Data();
  // console.log('-- Day 2, Question 1 --');
  // console.log(await countValidPasswords(inputDataDay2));
  // console.log('-- Day 2, Question 2 --');
  // console.log(await countValidPasswordsV2(inputDataDay2));

  // Day 3
  const inputDataDay3 = await day3Data();
  console.log('-- Day 3, Question 1 --');
  console.log('You Hit ' + await countTrees(inputDataDay3, 1, 3, 0, 0) + ' Trees');
  console.log('-- Day 3, Question 2 --');
  const slope1 = await countTrees(inputDataDay3, 1, 1, 0, 0);
  const slope2 = await countTrees(inputDataDay3, 1, 3, 0, 0);
  const slope3 = await countTrees(inputDataDay3, 1, 5, 0, 0);
  const slope4 = await countTrees(inputDataDay3, 1, 7, 0, 0);
  const slope5 = await countTrees(inputDataDay3, 2, 1, 0, 0);
  const result = slope1 * slope2 * slope3 * slope4 * slope5;  
  console.log(result);
};
