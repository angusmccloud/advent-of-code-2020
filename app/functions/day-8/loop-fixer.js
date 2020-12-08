'use strict';

const loopFixer = (inputData = []) => {
    let result;
    for(let i = 0; i < inputData.length; i++) {
        let thisRow = inputData[i];
        const command = thisRow.split(" ")[0];
        result = {accumulator: 0, itBroke: true};
        if(command === 'jmp') {
            inputData[i] = inputData[i].replace('jmp', 'nop');
            result = doesLoopBreak(inputData);
            inputData[i] = inputData[i].replace('nop', 'jmp');
        } else if (command === 'nop') {
            inputData[i] = inputData[i].replace('nop', 'jmp');
            result = doesLoopBreak(inputData);
            inputData[i] = inputData[i].replace('jmp', 'nop');
        }
        if(!result.itBroke) {
            console.log('Found It!', result);
            break;
        }
    }

    return result;
}

module.exports = loopFixer; 

const doesLoopBreak = (inputData = []) => {
    let accumulator = 0;
    let nextIndex = 0;
    let processedIndexes = [];
    let keepRunning = true;
    let itBroke = true;

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
        } else if(nextIndex >= inputData.length) {
            keepRunning = false;
            itBroke = false;
        }
    }

    return {accumulator: accumulator, itBroke: itBroke};
}