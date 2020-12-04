'use strict';

const passportValidation = (inputData = [], requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']) => {
    let validPassports = 0;
    let invalidPassports = 0;

    let currentRecord = [];
    for (let i = 0; i < inputData.length; i++) {
        const thisRow = inputData[i];
        if(thisRow.length === 0) {
            // NEW RECORD
            const isValid = checkAllFields(currentRecord, requiredFields);
            if(isValid) {
                validPassports ++;
            } else {
                invalidPassports ++;
            }

            currentRecord = [];
        } else {
            const fields = thisRow.split(' ');
            for (let ii = 0; ii < fields.length; ii++) {
                const keyValuePair = fields[ii].split(':');
                const key = keyValuePair[0];
                currentRecord.push(key);
            }
        }
        
        // console.log(`Row ${i}, column ${targetColumn}, row length is ${rowLength}, remainder?? ${realColumn}, Character ${charAtPosition}, Total Trees ${trees}`);
    }
    const isValid = checkAllFields(currentRecord, requiredFields);
    if(isValid) {
        validPassports ++;
    } else {
        invalidPassports ++;
    }
    
    return validPassports;
}

const checkAllFields = (currentRecord, requiredFields) => {
    let validRecord = true;
    for(let i = 0; i < requiredFields.length; i++) {
        const hasField = currentRecord.filter(value => value === requiredFields[i]);
        if(hasField.length === 0) {
            validRecord = false;
        }
    }
    // console.log(currentRecord);

    return validRecord;
}

module.exports = passportValidation; 