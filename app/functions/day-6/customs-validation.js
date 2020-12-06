'use strict';

const customsValidation = (inputData = []) => {
    let numRecords = 0;

    let allGroups = [];

    let currentGroup = {};
    for (let i = 0; i < inputData.length; i++) {
        const thisRow = inputData[i];
        if(thisRow.length === 0) {
            // NEW RECORD
            allGroups.push(currentGroup);

            numRecords ++;
            currentGroup = {};
        } else {
            for(let ii = 0; ii < thisRow.length; ii++){
                const letter = thisRow.charAt(ii);
                if(currentGroup[letter] === undefined) {
                    currentGroup[letter] = 1;
                } else {
                    currentGroup[letter] ++;
                }
            }
        }
    }
    allGroups.push(currentGroup);

    let numKeys = 0;
    for(let i = 0; i < allGroups.length; i++){
      const keys = Object.keys(allGroups[i]);
      numKeys = numKeys + keys.length;
    }
    // console.log(numKeys);
    
    return numKeys;
}

module.exports = customsValidation; 