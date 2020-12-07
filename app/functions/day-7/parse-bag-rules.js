'use strict';

const parseBagRules = (inputData = []) => {
    let allRules = [];

    for (let i = 0; i < inputData.length; i++) {
        const thisRow = inputData[i];
        // console.log(thisRow);
        let rowArray = thisRow.split("contain ");
        let containsArray = [];
        if(rowArray[1] !== 'no other bags.'){
            rowArray[1] = rowArray[1].replace(/ bags/gi, '');
            rowArray[1] = rowArray[1].replace(/ bag/gi, '');
            rowArray[1] = rowArray[1].replace(/, /gi, ',');
            rowArray[1] = rowArray[1].replace('.', '');
            const contains = rowArray[1].split(",");
            for(let i = 0; i < contains.length; i++) {
                const num = contains[i].substr(0,1);
                const color = contains[i].substr(2);
                containsArray.push({color: color, num: num});
                // console.log(num, color);
            }
        }
        
        // rowArray[1] = rowArray[1].replace(/./gi, '');
        // console.log(rowArray[0]);
        const mainBag = rowArray[0].split(" bags")[0];
        // console.log(mainBag, containsArray);
        // console.log(containsArray);
        allRules.push({mainBag: mainBag, canCarry: containsArray});


    }
    // console.log(allRules);
    
    return allRules;
}

module.exports = parseBagRules; 