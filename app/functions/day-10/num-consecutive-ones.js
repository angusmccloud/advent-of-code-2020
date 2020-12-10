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

    // console.log(getPossibilities(0));
    // console.log(getPossibilities(1));
    // console.log(getPossibilities(2));
    // console.log(getPossibilities(3));
    // console.log(getPossibilities(4));
    // console.log(getPossibilities(5));

    return totalPossibilities;
}

module.exports = numConsecutiveOnes; 

const getPossibilities = (consecutiveOnes) => {
    let testData = [0, 3];
    for (let i = 0; i < consecutiveOnes; i++) {
        const newVal = testData[testData.length-1] + 1;
        testData.push(newVal);
    }
    const newVal = testData[testData.length-1] + 3;
    testData.push(newVal);

    let numPossibilities = 1;
    // ...Do something here :)

    return testData.push(newVal);;
}