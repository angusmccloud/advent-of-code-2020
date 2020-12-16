'use strict';

const question1 = (inputData = [], numRuns = 2020) => {
    let numPlays = {};
    let lastPlayed;
    for(let i = 0; i < inputData.length; i++) {
        const num = inputData[i];
        if(numPlays[num] === undefined) {
            lastPlayed = 0;
            numPlays[num] = {
                lastPlayed: i,
                totalPlays: 1,
            };
        } else {
            lastPlayed = i - numPlays[num].lastPlayed;
            numPlays[num] = {
                lastPlayed: i,
                totalPlays: numPlays[num].totalPlays++
            }
        }
    }
    // console.log('-- lastPlayed --', lastPlayed);

    for(let i = inputData.length; i < numRuns - 1; i++) {
        const num = lastPlayed;
        if(numPlays[num] === undefined) {
            lastPlayed = 0;
            numPlays[num] = {
                lastPlayed: i,
                totalPlays: 1,
            };
        } else {
            lastPlayed = i - numPlays[num].lastPlayed;
            numPlays[num] = {
                lastPlayed: i,
                totalPlays: numPlays[num].totalPlays++
            }
        }
    }

    // console.log('-- lastPlayed --', lastPlayed);

    return lastPlayed;
}

module.exports = question1; 
