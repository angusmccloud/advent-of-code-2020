'use strict';

const incrementCountsBySize = (inputData = []) => {
    let result = {
        1: 0,
        2: 0,
        3: 1
    }; // 3 starts at one to account for your device which isn't in the input data
    let lastVal = 0;
    for(let i = 0; i < inputData.length; i++) {
        const val = inputData[i];
        const diff = val - lastVal;
        result[diff] ++;
        lastVal = val;
    }

    return result;
}

module.exports = incrementCountsBySize; 