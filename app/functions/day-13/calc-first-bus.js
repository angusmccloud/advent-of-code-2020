'use strict';

const calcFirstBus = (inputData = [], availableTime) => {
    let result = {
        minTime: availableTime * 10,
        busId: 0,
        totalWait: 0,
        answer: 0
    };

    for(let i = 0; i < inputData.length; i++) {
        if(inputData[i] !== 'x') {
            const busId = Number(inputData[i]);
            const increments = Math.floor(availableTime / busId) + 1;
            const busLeaves = increments * busId;
            if(busLeaves < result.minTime) {
                result = {
                    minTime: busLeaves,
                    busId: busId,
                    totalWait: busLeaves - availableTime,
                    answer: busId * (busLeaves - availableTime)
                };
            }
        } 
    }

    return result;
}

module.exports = calcFirstBus; 
