'use strict';

const question1 = (inputData = []) => {
    let mask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    let memLocations = [];
    for(let i = 0; i < inputData.length; i++) {
        const row = inputData[i];
        // console.log(row);
        if(row.commandType === 'mask') {
            mask = row.mask;
        } else {
            const num = row.value;
            let binary = toBinary(num, 36);
            // console.log('Before Changes', binary);
            for(let ii = 0; ii < mask.length; ii++) {
                let maskChar = mask[ii];
                if(maskChar === '0' || maskChar === '1') {
                    binary = setCharAt(binary, ii, maskChar);
                }
            }
            // console.log('After Changes ', binary);
            const valueOfBinary = parseInt(binary, 2);
            memLocations[row.memLocation] = {
                binary: binary,
                value: valueOfBinary
            };
        }
    }
    
    // console.log (memLocations);

    let totalValue = 0;
    for(let i = 0; i < memLocations.length; i++) {
        if(memLocations[i] !== undefined) {
            totalValue = totalValue + memLocations[i].value;
        }
    }

    return totalValue;
}

module.exports = question1; 

const toBinary = (value, len = 64) => {
    if (!Number.isSafeInteger(value)) {
      throw new TypeError('value must be a safe integer');
    }
  
    const negative = value < 0;
    const twosComplement = negative ? Number.MAX_SAFE_INTEGER + value + 1 : value;
    const signExtend = negative ? '1' : '0';
    let result = twosComplement.toString(2).padStart(53, '0').padStart(64, signExtend);
    return result.substr(-len);
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}