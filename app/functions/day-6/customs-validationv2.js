'use strict';

const customsValidationV2 = (inputData = []) => {
    let numRecords = 0;

    let allGroups = [];

    let currentGroup = {};
    let numInGroup = 0;
    for (let i = 0; i < inputData.length; i++) {
        const thisRow = inputData[i];
        if(thisRow.length === 0) {
            // NEW RECORD
            currentGroup['numInGroup'] = numInGroup;
            allGroups.push(currentGroup);

            numRecords ++;
            currentGroup = {};
            numInGroup = 0;
        } else {
            for(let ii = 0; ii < thisRow.length; ii++){
                const letter = thisRow.charAt(ii);
                if(currentGroup[letter] === undefined) {
                    currentGroup[letter] = 1;
                } else {
                    currentGroup[letter] ++;
                }
            }
            numInGroup++;
        }
    }
    currentGroup['numInGroup'] = numInGroup;
    allGroups.push(currentGroup);

    let numKeys = 0;
    for(let i = 0; i < allGroups.length; i++){
      const keys = Object.keys(allGroups[i]);
      let matchingValues = -1; // There's always going to be 1 match on numInGroup
      const numInGroup = allGroups[i].numInGroup;
      for(let ii = 0; ii < keys.length; ii++){
        if(allGroups[i][keys[ii]] === numInGroup){
            matchingValues ++;
        }
      }
      numKeys = numKeys + matchingValues;
    }
    // console.log(numKeys);
    
    return numKeys;
}

module.exports = customsValidationV2; 