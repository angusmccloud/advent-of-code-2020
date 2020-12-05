'use strict';

const getMissingSeat = (inputData = []) => {
    let lastId;
    for(let i = 0; i < inputData.length; i++) {
        const seatId = inputData[i].seatId;
        if (lastId !== null) {
            if (seatId === lastId + 2){
                return seatId - 1;
            }
        }
        lastId = seatId;
    }
    
    return 'Couldn\'t find seat ID';
}

module.exports = getMissingSeat; 