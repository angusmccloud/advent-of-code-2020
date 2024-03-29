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

const day5Data = require('../functions/day-5/source-data');
const getAllSeats = require('../functions/day-5/get-all-seats');
const getMissingSeat = require('../functions/day-5/get-missing-seat');

const day6Data = require('../functions/day-6/source-data');
const customsValidation = require('../functions/day-6/customs-validation');
const customsValidationV2 = require('../functions/day-6/customs-validationv2');

const day7Data = require('../functions/day-7/source-data');
const parseBagRules = require('../functions/day-7/parse-bag-rules');
const day7Question1 = require('../functions/day-7/question1');
const day7Question2 = require('../functions/day-7/question2');

const day8Data = require('../functions/day-8/source-data');
const loopBreaker = require('../functions/day-8/loop-breaker');
const loopFixer = require('../functions/day-8/loop-fixer');

const day9Data = require('../functions/day-9/source-data');
const checkTwoNumMatch = require('../functions/day-9/check-for-twonum-match');
const day9Question1 = require('../functions/day-9/question1');
const day9Question2 = require('../functions/day-9/question2');

const day10Data = require('../functions/day-10/source-data');
const incrementCountsBySize = require('../functions/day-10/increment-counts-by-size');
const numConsecutiveOnes = require('../functions/day-10/num-consecutive-ones');

const day11Data = require('../functions/day-11/source-data');
const parseDataIntoArrayDay11 = require('../functions/day-11/parse-data-into-array');
const day11Question1 = require('../functions/day-11/question1');
const day11Question2 = require('../functions/day-11/question2');

const day12Data = require('../functions/day-12/source-data');
const manhattanDistance = require('../functions/day-12/manhattan-distance');
const movingWaypoint = require('../functions/day-12/moving-waypoint');

const day13Data = require('../functions/day-13/source-data');
const calcFirstBus = require('../functions/day-13/calc-first-bus');
const day13Question2 = require('../functions/day-13/question2');

const day14Data = require('../functions/day-14/source-data');
const day14ParseData = require('../functions/day-14/parse-data');
const day14Question1 = require('../functions/day-14/question1');
const day14Question2 = require('../functions/day-14/question2');

const day15Data = require('../functions/day-15/source-data');
const day15Question1 = require('../functions/day-15/question1');

const day16Data = require('../functions/day-16/source-data');
const day16Question1 = require('../functions/day-16/question1');
const day16Question2 = require('../functions/day-16/question2');

const day17Data = require('../functions/day-17/source-data');
const day17Question1 = require('../functions/day-17/question1');
const day17Question2 = require('../functions/day-17/question2');

const day18Data = require('../functions/day-18/source-data');
const day18Question1 = require('../functions/day-18/question1');
const day18Question2 = require('../functions/day-18/question2');

module.exports.tester = async () => {
  const timestamp = new Date().getTime();

  // Leaderboard Data
  const leaderboardData = await getLeaderboardJSON();
  console.log("-- leaderboardData --",leaderboardData);

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

  // Day 5
  // const inputDataDay5 = await day5Data();
  // console.log('-- Day 5, Question 1 --');
  // let allSeats = await getAllSeats(inputDataDay5);
  // allSeats.sort((a, b) => (a.seatId < b.seatId) ? 1 : -1);
  // console.log(allSeats[0].seatId);
  // console.log('-- Day 5, Question 2 --');
  // allSeats.sort((a, b) => (a.seatId > b.seatId) ? 1 : -1); // Switch the data so it's counting up instead of down
  // console.log(await getMissingSeat(allSeats));

  // Day 6
  // const inputDataDay6 = await day6Data();
  // console.log('-- Day 6, Question 1 --');
  // console.log(await customsValidation(inputDataDay6));
  // console.log('-- Day 6, Question 2 --');
  // console.log(await customsValidationV2(inputDataDay6));

  // Day 7
  // const inputDataDay7 = await day7Data();
  // console.log('-- Day 7, Question 1 --');
  // const allRules = parseBagRules(inputDataDay7);
  // console.log(await day7Question1(allRules));
  // console.log('-- Day 7, Question 2 --');
  // console.log(await day7Question2(allRules));

  // Day 8
  // const inputDataDay8 = await day8Data();
  // console.log('-- Day 8, Question 1 --');
  // console.log(await loopBreaker(inputDataDay8));
  // console.log('-- Day 8, Question 2 --');
  // console.log(await loopFixer(inputDataDay8));

  // Day 9
  // const inputDataDay9 = await day9Data();
  // console.log('-- Day 9, Question 1 --');
  // const question1Output = await day9Question1(inputDataDay9);
  // console.log(question1Output);
  // console.log('-- Day 9, Question 2 --');
  // console.log(await day9Question2(inputDataDay9, question1Output));

  // Day 10
  // const inputDataDay10 = await day10Data();
  // inputDataDay10.sort(function (a, b) { return a > b ? 1 : -1; });
  // inputDataDay10.push(inputDataDay10[inputDataDay10.length - 1] + 3); // Add our device which is +3 on the end
  // console.log('-- Day 10, Question 1 --');
  // const inputSteps = await incrementCountsBySize(inputDataDay10);
  // console.log(inputSteps[1] * inputSteps[3]);
  // console.log('-- Day 10, Question 2 --');
  // console.log(await(numConsecutiveOnes(inputDataDay10)));

  // Day 11
  // const inputDataDay11 = await day11Data();
  // const parsedDay11 = await parseDataIntoArrayDay11(inputDataDay11);
  // // console.log(parsedDay11);
  // console.log('-- Day 11, Question 1 --');
  // console.log(await day11Question1(parsedDay11));
  // console.log('-- Day 11, Question 2 --');
  // console.log(await day11Question2(parsedDay11));

  // Day 12
  // const inputDataDay12 = await day12Data();
  // console.log('-- Day 12, Question 1 --');
  // console.log(await manhattanDistance(inputDataDay12));
  // console.log('-- Day 12, Question 2 --');
  // console.log(await movingWaypoint(inputDataDay12));

  // Day 13
  // const inputDataDay13 = await day13Data();
  // const targetTime = inputDataDay13[0];
  // const scheduleData = inputDataDay13[1].split(',');
  // console.log('-- Day 13, Question 1 --');
  // console.log(await calcFirstBus(scheduleData, targetTime));
  // console.log('-- Day 13, Question 2 --');
  // console.log(await day13Question2(scheduleData));

  // Day 14
  // const inputDataDay14 = await day14Data();
  // const parsedData = await day14ParseData(inputDataDay14);
  // // console.log(parsedData);
  // console.log('-- Day 14, Question 1 --');
  // console.log(await day14Question1(parsedData));
  // console.log('-- Day 14, Question 2 --');
  // console.log(await day14Question2(parsedData));

  // Day 15
  // const inputDataDay15 = await day15Data();
  // console.log('-- Day 15, Question 1 --');
  // console.log(await day15Question1(inputDataDay15, 2020));
  // console.log('-- Day 15, Question 2 --');
  // console.log(await day15Question1(inputDataDay15, 30000000));
  
  // Day 16
  // const inputDataDay16 = await day16Data();
  // console.log('-- Day 16, Question 1 --');
  // const question1Output = await day16Question1(inputDataDay16);
  // console.log(question1Output.sumInvalid);
  // const q2Input = {
  //   rules: inputDataDay16.rules,
  //   myTicket: inputDataDay16.myTicket,
  //   otherTickets: question1Output.validTickets
  // };
  // console.log('-- Day 16, Question 2 --');
  // console.log(await day16Question2(q2Input));

  // Day 17
  // const inputDataDay17 = await day17Data();
  // console.log('-- Day 17, Question 1 --');
  // console.log(await day17Question1(inputDataDay17));
  // console.log('-- Day 17, Question 2 --');
  // console.log(await day17Question2(inputDataDay17));

  // Day 18
  // const inputDataDay18 = await day18Data();
  // console.log('-- Day 18, Question 1 --');
  // console.log(await day18Question1(inputDataDay18));
  // console.log('-- Day 18, Question 2 --');
  // console.log(await day18Question2(inputDataDay18));
};
