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
            if(consecOnes[numConsecutive] === undefined) {
                consecOnes[numConsecutive] = 1
            } else {
                consecOnes[numConsecutive] ++;
            }
            numConsecutive = 0;  
        }
        lastVal = val;

        if(i === (inputData.length - 1)) { // also close out the last row
            if(consecOnes[numConsecutive] === undefined) {
                consecOnes[numConsecutive] = 1
            } else {
                consecOnes[numConsecutive] ++;
            }
        }
    }

    let numPossibilities = getPossibleCombos(consecOnes.length);
    let totalPossibilities = 1;
    for(let i = 0; i < consecOnes.length; i++) {
        totalPossibilities = totalPossibilities * Math.pow(numPossibilities[i], consecOnes[i]);
    }

    return totalPossibilities;
}

module.exports = numConsecutiveOnes; 

const getPossibleCombos = (maxConsecutive) => {
    let response = [];
    let lastThreeResponses = [0, 0, 0];
    const minValue = 1;
    for(let i = 0; i <= maxConsecutive; i++) {
        let possible = lastThreeResponses.reduce((a, b) => a + b, 0);
        lastThreeResponses.shift();
        if(possible < minValue) {
            possible = minValue;
        }
        lastThreeResponses.push(possible);
        response[i] = possible;
    }
    return response;
}