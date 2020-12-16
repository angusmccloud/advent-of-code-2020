'use strict';

const parseData = (inputData = []) => {
    let result = [];
    
    for(let i = 0; i < inputData.length; i++) {
        const row = inputData[i];
        const rowSplit = row.split(' = ');
        if(rowSplit[0] === 'mask') {
            result.push({
                commandType: 'mask',
                mask: rowSplit[1]
            });
        } else {
            const memLocation = rowSplit[0].substr(4, rowSplit[0].length - 5);
            result.push({
                commandType: 'mem',
                memLocation: memLocation,
                value: Number(rowSplit[1])
            })
        }
    }

    return result;
}

module.exports = parseData; 
