'use strict';

const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { upperCaseFirst } = require('upper-case-first');
const he = require('he');

const getLeaderboardJSON = require('../functions/get-leaderboard');

const day1Data = require('../functions/day-1/source-data');
const sumTwoValues = require('../functions/day-1/sum-two-values');
const sumThreeValues = require('../functions/day-1/sum-three-values');

const day2Data = require('../functions/day-2/source-data');
const countValidPasswords = require('../functions/day-2/count-valid-passwords');
const countValidPasswordsV2 = require('../functions/day-2/count-valid-passwordsv2');

const day3Data = require('../functions/day-3/source-data');
const countTrees = require('../functions/day-3/count-trees');

const day4Data = require('../functions/day-4/source-data');
const passportValidation = require('../functions/day-4/passport-validation');
const passportValidationV2 = require('../functions/day-4/passport-validation-v2');

module.exports.tester = async () => { 
  const timestamp = new Date().getTime(); 

  // console.log(await getLeaderboardJSON());

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

  // // Day 3
  // const inputDataDay3 = await day3Data();
  // console.log('-- Day 3, Question 1 --');
  // console.log('You Hit ' + await countTrees(inputDataDay3, 1, 3, 0, 0) + ' Trees');
  // console.log('-- Day 3, Question 2 --');
  // const slope1 = await countTrees(inputDataDay3, 1, 1, 0, 0);
  // const slope2 = await countTrees(inputDataDay3, 1, 3, 0, 0);
  // const slope3 = await countTrees(inputDataDay3, 1, 5, 0, 0);
  // const slope4 = await countTrees(inputDataDay3, 1, 7, 0, 0);
  // const slope5 = await countTrees(inputDataDay3, 2, 1, 0, 0);
  // const result = slope1 * slope2 * slope3 * slope4 * slope5;  
  // console.log(result);

  // Day 4
  // const inputDataDay4 = await day4Data();
  // console.log('-- Day 4, Question 1 --');
  // console.log(await passportValidation(inputDataDay4));
  // console.log('-- Day 4, Question 2 --');
  // const v2ValidationRules = [
  //   {field: 'byr', type: 'number', min: 1920, max: 2002},
  //   {field: 'iyr', type: 'number', min: 2010, max: 2020}, 
  //   {field: 'eyr', type: 'number', min: 2020, max: 2030},
  //   {field: 'hgt', type: 'string'},
  //   {field: 'hcl', type: 'string'},
  //   {field: 'ecl', type: 'inList', list: ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']},
  //   {field: 'pid', type: 'numberLength', minLength: 9, maxLength: 9}
  // ];
  // console.log(await passportValidationV2(inputDataDay4, v2ValidationRules));
};
