'use strict';

const question2 = (inputData = []) => {
    const rules = inputData.rules;
    const myTicket = inputData.myTicket;
    const otherTickets = inputData.otherTickets;

    const numFields = otherTickets[0].length;

    let rulePossibilities = [];

    for(let i = 0; i < rules.length; i++) {
        const validNumbers = [];
        const rule = rules[i];
        const rulesArray = rule.split(": ")[1].split(" or ");
        const ruleName = rule.split(": ")[0];
        for(let ii = 0; ii < rulesArray.length; ii++) {
            const ruleArray = rulesArray[ii].split("-");
            for(let iii = Number(ruleArray[0]); iii <= Number(ruleArray[1]); iii++){
                validNumbers[iii] = true;
            }
        }
        // console.log('-- Rules --', ruleName);
        let possibleFields = [];
        for(let ii = 0; ii < numFields; ii++ ){
            for(let iii = 0; iii < otherTickets.length; iii++) {
                let valid = true;
                const val = otherTickets[iii][ii];
                if(validNumbers[val] === undefined || validNumbers[val] === false) {
                    valid = false;
                    possibleFields[ii] = valid;
                    break;
                }
                possibleFields[ii] = valid;
            }
        }
        const numPossibleFields = possibleFields.filter(Boolean).length;
        rulePossibilities[i] = {
            ruleIndex: i,
            ruleName,
            rule,
            numPossibleFields,
            possibleFields
        }
        // console.log('-- possibleFields --', possibleFields);
    }

    rulePossibilities.sort((a, b) => (a.numPossibleFields > b.numPossibleFields) ? 1 : -1);
    // console.log(rulePossibilities);

    let assignedIndexes = [];

    for(let i = 0; i < rulePossibilities.length; i++) {
        const rule = rulePossibilities[i];
        const possibleFields = rule.possibleFields;
        for(let ii = 0; ii < possibleFields.length; ii++) {
            if(!assignedIndexes.includes(ii)) {
                if(possibleFields[ii] === true) {
                    assignedIndexes.push(ii);
                    rulePossibilities[i].column = ii;
                }
            }
        }
    }
    rulePossibilities.sort((a, b) => (a.column > b.column) ? 1 : -1);
    const myTicketArray = myTicket.split(",");
    const myTicketResult = [];
    for (let i = 0; i < rulePossibilities.length; i++) {
        const rule = rulePossibilities[i];
        const ruleName = rule.ruleName;
        const column = rule.column;
        const myValue = myTicketArray[column];
        myTicketResult.push({
            ruleName,
            value: myValue
        });
    }

    const filteredArray = myTicketResult.filter(function (str) { return str.ruleName.includes('departure'); });
    let result = 1;
    for(let i = 0; i < filteredArray.length; i++) {
        const val = filteredArray[i].value;
        result *= val;
    }
    
    return result;
}

module.exports = question2; 
