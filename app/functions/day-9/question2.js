'use strict';

const question2 = (inputData = [], targetNum = 0) => {
  let runningList = {
    sum: 0,
    nums: []
  };
  for(let i = 0; i < inputData.length; i++) {
    const val = inputData[i];
    if(val !== targetNum) {
      runningList.sum = runningList.sum + val;
      runningList.nums.push(val);

      if (runningList.sum > targetNum) {
        while(runningList.sum > targetNum) {
          const removeValue = runningList.nums.shift();
          runningList.sum = runningList.sum - removeValue;
        }
      }

      if(runningList.sum === targetNum) {
        runningList.nums.sort(function (a, b) { return a > b ? 1 : -1; });
        return runningList.nums[0] + runningList.nums[runningList.nums.length-1];
        break;
      }  
    }
  }

  return false;
}

module.exports = question2; 