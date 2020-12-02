'use strict';

const countValidPasswords = (inputData = []) => {
    let validPasswords = 0;
    for (let i = 0; i < inputData.length; i++) {
        const rule = inputData[i].rule;
        const password = inputData[i].password;
        const ruleArray = rule.split(" ");
        const ruleCountArray = ruleArray[0].split("-");
        const ruleLetter = ruleArray[1];
        const ruleCountMin = ruleCountArray[0];
        const ruleCountMax = ruleCountArray[1];
        // console.log(rule);
        // console.log('Letter', ruleLetter);
        // console.log('Min', ruleCountMin);
        // console.log('Max', ruleCountMax);
        let countOfLetter = 0;
        for (var ii = 0; ii < password.length; ii++) {
            if (password.charAt(ii) === ruleLetter) {
                countOfLetter += 1;
            }
        }
        if(countOfLetter >= ruleCountMin && countOfLetter <= ruleCountMax) {
            validPasswords ++;
        }
        // console.log('-- Password --', password);
        // console.log('Count of Letter', countOfLetter);
    }
    return validPasswords;
}

module.exports = countValidPasswords; 