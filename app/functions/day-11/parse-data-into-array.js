'use strict';

const parseDataIntoArray = (inputData = []) => {
    let result = [];
    for(let i = 0; i < inputData.length; i++) {
        const row = inputData[i];
        for(let ii = 0; ii < row.length; ii++) {
            const char = row.charAt(ii);
            if(result[i] === undefined) {
                result[i] = [];
            }
            result[i][ii] = char;
        }
    }

    return result;
}

module.exports = parseDataIntoArray; 