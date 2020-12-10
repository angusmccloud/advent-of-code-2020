'use strict';

const numConsecutiveOnes = (inputData = []) => {
    let consecOnes = [];
    let lastVal = 0;
    let numConsecutive = 0;
    for(let i = 0; i < inputData.length; i++) {
        const val = inputData[i];
        const diff = val - lastVal;
        if(diff === 1){
            numConsecutive ++;
        } else {
            if(consecOnes[numConsecutive] === undefined){
                consecOnes[numConsecutive] = 1;
            } else {
                consecOnes[numConsecutive] ++;
            }
            numConsecutive = 0;
        }
        lastVal = val;

        if(i === (inputData.length - 1)) { // also close out the last row
            if(consecOnes[numConsecutive] === undefined){
                consecOnes[numConsecutive] = 1;
            } else {
                consecOnes[numConsecutive] ++;
            }
        }
    }

    let numPossibilities = [1, 1, 2, 4, 7];
    let incrementPossibilities = [];
    
    for(let i = 0; i < consecOnes.length; i++) {
        incrementPossibilities[i] = Math.pow(numPossibilities[i], consecOnes[i]);
    }
    
    let totalPossibilities = 1;
    for(let i =0; i < incrementPossibilities.length; i++) {
        totalPossibilities = totalPossibilities * incrementPossibilities[i];
    }

    return totalPossibilities;
}

module.exports = numConsecutiveOnes; 