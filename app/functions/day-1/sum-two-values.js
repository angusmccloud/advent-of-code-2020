'use strict';

const sumTwoValues = (inputData = [], targetSum = 2020) => {
    for(let i = 0; i < inputData.length; i++) {
        const singleValue = inputData[i];
        const targetValue = targetSum - singleValue;

        const hasMatchArray = inputData.filter(value => value === targetValue && value !== singleValue);
        if(hasMatchArray.length !== 0) {
            const returnArray = {
                message: 'We have a match!',
                values: `${singleValue} and ${targetValue}`,
                sum: singleValue + targetValue,
                multipliedValue: singleValue * targetValue
            }
            return returnArray;
        }
    }
}

module.exports = sumTwoValues; 