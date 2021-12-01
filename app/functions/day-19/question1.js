'use strict';

const question1 = (inputData) => {
    const rules = createRulesArray(inputData);
    // console.log(rules);
    let timesInvokedArray = [1];
    let strings = [];
    for(let i = 0; i < rules.length; i++) {
        if(rules[i] === 'a' || rules[i] === 'b') {
            strings[i] = [rules[i]];
        } else {
            const rulesArray = rules[i];
            for(let ii = 0; ii < rulesArray.length; ii++) {
                const oneRule = rulesArray[ii];
                for(let iii = 0; iii < oneRule.length; iii++) {
                    let num = oneRule[iii];
                    if(timesInvokedArray[num] !== undefined) {
                        timesInvokedArray[num] = timesInvokedArray[num] + 1; 
                    } else {
                        timesInvokedArray[num] = 1;
                    }
                }
            }
        }
    }
    // console.log(timesInvokedArray);
    let timesInvoked = [];
    for(let i = 0; i < timesInvokedArray.length; i++) {
        timesInvoked.push({
            index: i,
            timesInvoked: timesInvokedArray[i]
        });
    }
    timesInvoked.sort((a, b) => (a.timesInvoked < b.timesInvoked) ? 1 : -1);
    // console.log('timesInvoked', timesInvoked);
    timesInvoked = timesInvoked.filter(function( obj ) {
        return obj.index !== 42;
    });
    timesInvoked = timesInvoked.filter(function( obj ) {
        return obj.index !== 31;
    });
    timesInvoked.unshift({
        index: 42,
        timesInvoked: 1000
    });
    timesInvoked.unshift({
        index: 31,
        timesInvoked: 1000
    });

    for (let i = 0; i < timesInvoked.length; i++) {
        const index = timesInvoked[i].index;
        if(index !== 0 && rules[index] !== 'a' && rules[index] !== 'b') {
            // console.log(index);
            // console.log(rules[index]);
            const newPossibleStrings = getPossibleStrings(rules, index, strings);
            strings[index] = newPossibleStrings;
            // console.log(newPossibleStrings);
        } else {
            console.log('-- Come back to index 0 at the end (and skip a/b, they were set above)--');
        }

    }
    // console.log('-- Strings when Done --', strings);
    const possibleStrings = getPossibleStrings(rules, 0, strings);
    const data = inputData.data;
    console.log("-- 42 length --", strings[42].length);
    console.log("-- 31 length --", strings[31].length);
    let arrayOverlap = 0;
    for(let i = 0; i < strings[42].length; i++){
        if(strings[31].includes(strings[42][i])) {
            arrayOverlap ++;
        }
    }
    console.log("-- Overlap --", arrayOverlap);
    
    let numThatMatch = 0;
    let lengthsArray = [];
    
    for(let i = 0; i < data.length; i++) {
        if(possibleStrings.includes(data[i])) {
            numThatMatch ++;
        }
        const length = data[i].length;
        if(lengthsArray[length] !== undefined) {
            lengthsArray[length] ++;
        } else {
            lengthsArray[length] = 1;
        }
    }
    console.log("-- lengthsArray --", lengthsArray);
    console.log("-- Total Recors --", data.length);

    return numThatMatch;
}

module.exports = question1; 

const getPossibleStrings = (rules, indexToRun, strings) => {
    console.log(new Date(), '-- Starting  on Index--', indexToRun, rules[indexToRun]);
    // console.log('-- strings when running --', strings);
    let possibleValues = [];
    for(let i = 0; i < rules[indexToRun].length; i++) {
        possibleValues.push({
            rule: rules[indexToRun][i],
            string: ''
        });
    }

    let possibleStrings = [];
    let keepRunning = true;

    let counter = 0;
    while(keepRunning) {
        const startingRule = possibleValues.shift();
        const startingString = startingRule.string;
        let rule = startingRule.rule;
        // console.log("-- rule --", rule);
        // console.log('-- possibleValues, Before Rule Shift --', possibleValues);
        // const firstNum = rule.shift(); // THis was breaking shit, I have NO IDEA WHY. Replaced with below...
        const firstNum = rule[0];
        rule = rule.slice(1)
        // console.log('-- possibleValues, AFter Rule Shift --', possibleValues);
        let string = startingString;
        if(strings[firstNum] !== undefined) {
            const stringsArray = strings[firstNum];
            // console.log("-- stringsArray --", stringsArray);
            // console.log('-- possibleValues, Another Check --', possibleValues);
            for(let i = 0; i < stringsArray.length; i++) {
                // console.log('startingString', startingString);
                string = startingString + stringsArray[i];
                // console.log("-- string?? --", string);
                if(rule.length > 0) {
                    // console.log("-- Has Rule, push -- ");
                    possibleValues.push({
                        rule: rule,
                        string: string
                    });
                } else {
                    // console.log("-- No Rule, Just a String -- ");
                    possibleStrings.push(string);
                }
            }
            // console.log('-- possibleValues, After Inserts --', possibleValues);
            // console.log('-- possibleStrings --', possibleStrings);
        } else {
            // console.log("-- Made it into Else somehow?! --");
            const lookupRule = rules[firstNum];
            if(lookupRule === 'a' || lookupRule === 'b') {
                string = startingString + lookupRule;
                if(rule.length > 0) {
                    possibleValues.push({
                        rule: rule,
                        string: string
                    });
                } else {
                    possibleStrings.push(string);
                }
            } else {
                for(let i = 0; i < lookupRule.length; i++) {
                    const newArray = lookupRule[i].concat(rule);
                    possibleValues.push({
                        rule: newArray,
                        string: string
                    });
                }
            }
        }

        if(possibleValues.length === 0){
            keepRunning = false;
        }
        counter ++;
        // if(counter > 10000 && indexToRun === 11) {
        //     keepRunning = false;
        //     console.log("-- Kill Switch --");
        //     console.log('-- possibleValues --', possibleValues);
        //     console.log("-- String 31 Length --", strings[31].length);
        //     console.log("-- String 42 Length --", strings[42].length);
        // }
        if(counter % 100000 === 0) {
            console.log(new Date(), counter);
            console.log('-- Possible Values Length --', possibleValues.length);
            console.log('-- Possible Strings Length --', possibleStrings.length);
        }
    }

    return possibleStrings;
}

const createRulesArray = (inputData) => {
    const rulesInput = inputData.rules;
    let rules = [];
    for(let i = 0; i < rulesInput.length; i++) {
        const ruleArray = rulesInput[i].split(": ");
        const index = Number(ruleArray[0]);
        const rule = ruleArray[1].replace(/"/g, "");
        const options = [];

        if(rule === 'a' || rule === 'b'){
            rules[index] = rule;
        } else {
            const optionsArray = rule.split(" | ");
            for(let ii = 0; ii < optionsArray.length; ii++) {
                const valuesArray = optionsArray[ii].split(" ");
                let option = [];
                for(let iii = 0; iii < valuesArray.length; iii++) {
                    option.push(Number(valuesArray[iii]));
                }
                options.push(option);
            }
            rules[index] = options;
        }
    }
    return rules;
}