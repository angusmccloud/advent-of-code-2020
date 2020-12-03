'use strict';

const countValidPasswordsV2 = (inputData = []) => {
    let validPasswords = 0;
    for (let i = 0; i < inputData.length; i++) {
        const rule = inputData[i].rule;
        const password = inputData[i].password;
        const ruleArray = rule.split(" ");
        const rulePositionArray = ruleArray[0].split("-");
        const ruleLetter = ruleArray[1];
        const rulePosition1 = rulePositionArray[0] -1;
        const rulePosition2 = rulePositionArray[1] -1;
        // console.log(rule);
        // console.log('Letter', ruleLetter);
        // console.log('Min', ruleCountMin);
        // console.log('Max', ruleCountMax);
        let countOfLetter = 0;
        if(password.charAt(rulePosition1) === ruleLetter){
            countOfLetter ++;
        }
        if(password.charAt(rulePosition2) === ruleLetter){
            countOfLetter ++;
        }
        if(countOfLetter === 1) {
            validPasswords ++;
        }
        // console.log('-- Password --', password);
        // console.log('Count of Letter', countOfLetter);
    }
    return `There are ${validPasswords} Valid Passwords`;
}

module.exports = countValidPasswordsV2; 