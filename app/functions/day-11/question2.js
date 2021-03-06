'use strict';

const question1 = (inputData = []) => {
    let resultData = inputData;
    let lastNumFilled = 0;
    let keepRunning = true;
    while( keepRunning ) {
    // for(let i = 0; i < 500; i++) {
        resultData = fillSeats(resultData);
        resultData = emptySeats(resultData);
        let filled = numFilled(resultData);
        if(lastNumFilled === filled) {
            keepRunning = false;
            // console.log(filled);
        }
        lastNumFilled = filled;
        
        // console.log(resultData[0]);
    }

    return lastNumFilled;
}

module.exports = question1; 

const fillSeats = (inputData = []) => {
    let futureArray = [];
    
    for(let i = 0; i < inputData.length; i ++) {
        for(let ii = 0; ii < inputData[i].length; ii++) {
            if(futureArray[i] === undefined) {
                futureArray[i] = [];
            }
            const seat = inputData[i][ii];
            futureArray[i][ii] = seat;

            if(seat === 'L') {
                const neighbors = neighborSeatStatus(inputData, i, ii, inputData.length, inputData[i].length);
                if(neighbors.empty === 8) {
                    futureArray[i][ii] = '#';
                }
            }
        }
    }

    // console.log('-- Future Array --', futureArray[0]);
    return futureArray;
}

const emptySeats = (inputData = []) => {
    let futureArray = [];
    
    for(let i = 0; i < inputData.length; i ++) {
        for(let ii = 0; ii < inputData[i].length; ii++) {
            if(futureArray[i] === undefined) {
                futureArray[i] = [];
            }
            const seat = inputData[i][ii];
            futureArray[i][ii] = seat;

            if(seat === '#') {
                const neighbors = neighborSeatStatus(inputData, i, ii, inputData.length, inputData[i].length);
                if(neighbors.filled >= 5) {
                    futureArray[i][ii] = 'L';
                }
            }
        }
    }

    // console.log('-- Future Array --', futureArray[0]);
    return futureArray;
}

const neighborSeatStatus = (inputData = [], row = 0, column = 0, height = 0, width = 0) => {
    let result = {
        empty: 0,
        filled: 0
    };
    const directionsToCheck = [
        [-1, -1],
        [-1, 0],
        [-1, +1],
        [0, -1],
        [0, +1],
        [+1, -1],
        [+1, 0],
        [+1, +1]
    ];

    for(let i = 0; i < directionsToCheck.length; i++) {
        let foundSeat = false;
        let whichTry = 1;
        while(!foundSeat) {
            const rowCheck = row + (directionsToCheck[i][0] * whichTry);
            const colCheck = column + (directionsToCheck[i][1] * whichTry);
            if(rowCheck < 0 || colCheck < 0 || rowCheck >= height || colCheck >= width) {
                // This cell doesn't exist
                result.empty ++;
                foundSeat = true;
            } else {
                const val = inputData[rowCheck][colCheck];
                // console.log(val);
                if(val === 'L') {
                    result.empty ++;
                    foundSeat = true;
                } else if(val === '#'){
                    result.filled ++;
                    foundSeat = true;
                }
            }

            whichTry ++;
        }
    }

    return result;
}

const numFilled = (inputData = []) => {
    let filled = 0;
    for(let i = 0; i < inputData.length; i ++) {
        for(let ii = 0; ii < inputData[i].length; ii++) {
            const seat = inputData[i][ii];
            if(seat === '#') {
                filled ++;
            }
        }
    }

    return filled;
}