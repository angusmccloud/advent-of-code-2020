'use strict';

const numConsecutiveOnes = (inputData = []) => {
    let consecOnes = [0, 0, 0, 0, 0, 0];
    let lastVal = 0;
    let numConsecutive = 0;
    for(let i = 0; i < inputData.length; i++) {
        const val = inputData[i];
        const diff = val - lastVal;
        if(diff === 1){
            numConsecutive ++;
        } else {
            consecOnes[numConsecutive] ++;
            numConsecutive = 0;
        }
        lastVal = val;

        if(i === (inputData.length - 1)) { // also close out the last row
            consecOnes[numConsecutive] ++;
        }
    }

    let numPossibilities = [1, 1, 2, 4, 7, 13]; // Number of possibilities for 0 consectutive 1s, 1 consecutive, 2 consecutive, etc...
    let totalPossibilities = 1;
    for(let i = 0; i < consecOnes.length; i++) {
        totalPossibilities = totalPossibilities * Math.pow(numPossibilities[i], consecOnes[i]);
    }

    return totalPossibilities;
}

module.exports = numConsecutiveOnes; 