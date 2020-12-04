'use strict';

const passportValidationV2 = (inputData = [], requiredFields = []) => {
    let validPassports = 0;
    let invalidPassports = 0;

    let currentRecord = {};
    let fullRecords = 0;
    for (let i = 0; i < inputData.length; i++) {
        const thisRow = inputData[i];
        if(thisRow.length === 0) {
            // NEW RECORD
            const isValid = checkAllFields(currentRecord, requiredFields, fullRecords);
            fullRecords++;
            if(isValid) {
                validPassports ++;
            } else {
                invalidPassports ++;
            }

            currentRecord = {};
        } else {
            const fields = thisRow.split(' ');
            for (let ii = 0; ii < fields.length; ii++) {
                const keyValuePair = fields[ii].split(':');
                // const key = keyValuePair[0];
                currentRecord[keyValuePair[0]] = keyValuePair[1];
                // currentRecord.push(keyValuePair);
            }
        }
        
        // console.log(`Row ${i}, column ${targetColumn}, row length is ${rowLength}, remainder?? ${realColumn}, Character ${charAtPosition}, Total Trees ${trees}`);
    }
    const isValid = checkAllFields(currentRecord, requiredFields, fullRecords);
    if(isValid) {
        validPassports ++;
    } else {
        invalidPassports ++;
    }
    
    return validPassports;
}

const checkAllFields = (currentRecord, requiredFields, i = 0) => {
    // console.log(currentRecord);
    let validRecord = true;
    for(let i = 0; i < requiredFields.length; i++) {
        if(currentRecord[requiredFields[i].field] === undefined) {
            validRecord = false;
            break;
        } else {
            const validationType = requiredFields[i].type;
            const value = currentRecord[requiredFields[i].field];
            if(validationType === 'number') {
                if(value > requiredFields[i].max || value < requiredFields[i].min) {
                    validRecord = false;
                    break;
                }
            } else if(validationType === 'numberLength') {
                if(value.length > requiredFields[i].maxLength || value.length < requiredFields[i].minLength || isNaN(value)) {
                    validRecord = false;
                    break;
                }
            } else if(validationType === 'inList') {
                if(!requiredFields[i].list.includes(value)) {
                    validRecord = false;
                    break;
                }
            } else if(validationType === 'string') {
                if(requiredFields[i].field === 'hgt') {
                    const measure = value.substr(-2);
                    const val = value.substr(0, value.length -2);
                    if(measure === 'cm') {
                        if(val > 193 || val < 150) {
                            validRecord = false;
                            break;
                        }
                    } else if(measure === 'in') {
                        if(val > 76 || val < 59) {
                            validRecord = false;
                            break;
                        }
                    } else {
                        validRecord = false;
                        break;
                    }
                } else {
                    if(!value.match(/#(\d|[a-z]|[A-Z]){6}/gi)) {
                        validRecord = false;
                        break;
                    }
                }
            }
        }
    }

    console.log(validRecord, i);

    return validRecord;
}

module.exports = passportValidationV2; 