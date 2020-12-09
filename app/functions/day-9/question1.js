'use strict';

const checkTwoNumMatch = require('../day-9/check-for-twonum-match');

const question1 = (inputData = []) => {
  
  const numToCheckAgainst = 25;
  for(let i = numToCheckAgainst; i < inputData.length; i++) {
    let checkAgainst = [];
    for(let ii  = 0; ii < numToCheckAgainst; ii++) {
      const val = inputData[i+ii-numToCheckAgainst];
      checkAgainst.push(val);
    } 
    const hasMatch = checkTwoNumMatch(checkAgainst, inputData[i]);
    if(!hasMatch){
      return inputData[i];
    }
  }
  
  return false;
}

module.exports = question1; 