'use strict';

const question1 = (inputData = []) => {
    const rules = inputData.rules;
    const myTicket = inputData.myTicket;
    const otherTickets = inputData.otherTickets;

    let validNumbers = [];
    for(let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        const rulesArray = rule.split(": ")[1].split(" or ");
        for(let ii = 0; ii < rulesArray.length; ii++) {
            const ruleArray = rulesArray[ii].split("-");
            for(let iii = Number(ruleArray[0]); iii <= Number(ruleArray[1]); iii++){
                validNumbers[iii] = true;
            }
        }
    }
    // console.log(validNumbers);

    let validTickets = [];
    let sumInvalid = 0;
    for(let i = 0; i < otherTickets.length; i++) {
        const ticket = otherTickets[i];
        const nums = ticket.split(",");
        let valid = true;
        for(let ii = 0; ii < nums.length; ii++) {
            const num = Number(nums[ii]);
            if(validNumbers[num] === undefined || validNumbers[num] === false) {
                sumInvalid += num;
                valid = false;
            }
        }
        if(valid){
            validTickets.push(nums);
        }
    }


    return {sumInvalid, validTickets}
}

module.exports = question1; 
