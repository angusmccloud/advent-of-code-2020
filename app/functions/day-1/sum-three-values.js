'use strict';

const sumThreeValues = (inputData = [], targetSum = 2020) => {
    for(let i = 0; i < inputData.length; i++) {
        const singleValue = inputData[i];
        for(let ii = 0; ii < inputData.length; ii++) {
            const secondValue = inputData[ii];
            const targetValue = targetSum - secondValue - singleValue;
            if(targetValue >= 0 && singleValue !== secondValue){ // No need to run filter if we're already negative... 
                const hasMatchArray = inputData.filter(value => value === targetValue && value !== singleValue && value !== secondValue);
                if(hasMatchArray.length !== 0) {
                    const returnArray = {
                        message: 'We have a match!',
                        values: `${singleValue}, ${secondValue}, and ${targetValue}`,
                        sum: singleValue + secondValue + targetValue,
                        multipliedValue: singleValue * secondValue * targetValue
                    }
                    return returnArray;
                }
            }
        }
    }
}

module.exports = sumThreeValues; 