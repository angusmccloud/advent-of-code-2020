'use strict';

const question2 = (inputData = []) => {
    let busses = [];
    for(let i = 0; i < inputData.length; i++) {
        if(inputData[i] !== 'x') {
            const busId = Number(inputData[i]);
            busses.push({
                busId: busId,
                offset: i
            });
        }
    }

    busses.sort((a, b) => b.busId - a.busId);
    console.log(busses);

    let result = {result1: -busses[0].offset, result2: 0, diff: busses[0].busId};

    for(let i = 0; i < busses.length - 1; i++) {
        result = findMatch(result.result1, result.diff, busses[i+1].busId, busses[i+1].offset);
        // console.log(result);
    }

    return result.result1;
}

module.exports = question2; 

const findMatch = (startNum, increment, num, offset) => {
    let result = 0;
    let i = startNum;
    let target = offset;
    while(target > num) {
        target = target - num;
    }

    while(result === 0) {
        const possibleTs = i;
        const remainder = possibleTs % num;
        if(((remainder === 0 && target === 0) || ((num - target) === remainder)) && possibleTs > increment) {
            result = possibleTs;
        }

        i = i + increment;
    }

    return {
        result1: result,
        diff: num * increment
    };
}