'use strict';

const question2 = (inputData = []) => {
    let mask = '';
    let memLocations = {};
    for(let i = 0; i < inputData.length; i++) {
        const row = inputData[i];
        // console.log(row);
        if(row.commandType === 'mask') {
            mask = row.mask;
        } else {
            const num = Number(row.memLocation);
            const value = row.value;
            // console.log(num);
            let binary = toBinary(num, 36);
            // console.log('Before Changes', binary);
            for(let ii = 0; ii < mask.length; ii++) {
                let maskChar = mask[ii];
                if(maskChar === '1' || maskChar === 'X') {
                    binary = setCharAt(binary, ii, maskChar);
                }
            }
            var indices = [];
            for(var ii = 0; ii < binary.length; ii++) {
                if (binary[ii] === "X") indices.push(ii);
            }
            // console.log('After Changes ', binary, (binary.match(new RegExp("X", "g")) || []).length);
            // console.log(indices);
            let memLocValues = [];

            const minBinary = binary.replace(/X/g, '0');
            memLocValues.push(parseInt(minBinary, 2));
            memLocations[parseInt(minBinary, 2)] = value;
            for(let ii = 0; ii < indices.length; ii++) {
                let index = binary.length - indices[indices.length - ii - 1];
                let binaryValue = binaryPositionValue(index);
                const numLocations = memLocValues.length;
                for(let iii = 0; iii < numLocations; iii++) {
                    memLocValues.push(memLocValues[iii] + binaryValue);
                    memLocations[memLocValues[iii] + binaryValue] = value;
                }
            }
        }
    }
    
    // console.log (memLocations);

    let totalValue = 0;
    for( var el in memLocations ) {
      if( memLocations.hasOwnProperty( el ) ) {
        totalValue += parseFloat( memLocations[el] );
      }
    }

    return totalValue;
}

module.exports = question2; 

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

const setCharAt = (str,index,chr) => {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

const binaryPositionValue = (position) => {
    let value = 1;
    for(let i = 1; i < position; i++) {
        value = value * 2;
    }
    return value;
}