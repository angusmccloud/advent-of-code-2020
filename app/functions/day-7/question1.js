'use strict';

const question1 = (allRules = []) => {
  let couldContainGold = [];
  const checkColor = 'shiny gold';
  let keepRunning = true;
  while (keepRunning) {
    const startingRows = couldContainGold.length;
    for (let i = 0; i < allRules.length; i++) {
      const bagName = allRules[i].mainBag;
      const rules = allRules[i].canCarry
      for (let ii = 0; ii < rules.length; ii++) {
        if (rules[ii].color === checkColor || couldContainGold.includes(rules[ii].color)) {
          if (!couldContainGold.includes(bagName)) {
            couldContainGold.push(bagName);
          }
        }
      }
    }
    if (startingRows === couldContainGold.length) {
      keepRunning = false;
    }
  }
  
  return couldContainGold.length;
}

module.exports = question1; 