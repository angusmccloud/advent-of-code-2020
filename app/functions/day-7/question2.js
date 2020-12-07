'use strict';

const question2 = (allRules = []) => {
  let numInBag = 0;
  let bagsToCount = ['shiny gold'];
  let moreToCount = true;
  while (moreToCount) {
    const bagToCheck = bagsToCount.shift();
    const hasMatchArray = allRules.filter(value => value.mainBag === bagToCheck);
      if(hasMatchArray.length !== 0) {
        const canCarry = hasMatchArray[0].canCarry;
        for (let i = 0; i < canCarry.length; i++){
          for(let ii = 0; ii < canCarry[i].num; ii++){
            bagsToCount.push(canCarry[i].color);
            numInBag ++;
          }
        }
      }
    if(bagsToCount.length === 0){
      moreToCount = false;
    }
  }
  
  return numInBag;
}

module.exports = question2; 