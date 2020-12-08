'use strict';

const loopBreaker = (inputData = []) => {
    let accumulator = 0;
    let nextIndex = 0;
    let processedIndexes = [];
    let keepRunning = true;

    while(keepRunning) {
        processedIndexes.push(nextIndex);
        const thisRow = inputData[nextIndex];
        const command = thisRow.split(" ");
        const value = parseInt(command[1]);
        if(command[0] === 'acc') {
            accumulator = accumulator + value;
            nextIndex = nextIndex + 1;
        } else if(command[0] === 'jmp') {
            nextIndex = nextIndex + value;
        } else if(command[0] === 'nop') {
            nextIndex = nextIndex + 1;
        }
        if(processedIndexes.includes(nextIndex)) {
            keepRunning = false;
        }
    }

    
    return accumulator;
}

module.exports = loopBreaker; 