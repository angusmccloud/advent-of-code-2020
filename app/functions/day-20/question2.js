'use strict';

const question2 = (inputData = []) => {
    let sum = 0;

    for (let i = 0; i < inputData.length; i++) {
        let formula = inputData[i];
        formula = formula.replace(/\s/g, '');
        let depthArray = createDepthMap(formula);

        while (Math.max(...depthArray) > 0) {
            let maxDepth = Math.max(...depthArray);
            let firstOpenParens = depthArray.findIndex(x => x === maxDepth);
            let firstCloseParens = formula.indexOf(")", firstOpenParens);
            let value = evaluateFormula(formula.substring(firstOpenParens + 1, firstCloseParens));
            formula = formula.substring(0, firstOpenParens) + value + formula.substring(firstCloseParens + 1, formula.length);

            depthArray = createDepthMap(formula);

        }

        var finalValue = evaluateFormula(formula);
        sum += finalValue;
        // console.log(inputData[i], finalValue);
    }

    return sum;
}

module.exports = question2;

const createDepthMap = (formula) => {
    let depth = 0;
    let depthArray = [];
    for (let i = 0; i < formula.length; i++) {
        if (formula[i] === "(") {
            depthArray.push(++depth);
        } else if (formula[i] === ")") {
            depthArray.push(depth--);
        } else {
            depthArray.push(depth);
        }
    }
    return depthArray;
}

const evaluateFormula = (formula) => {
    let formulaArray = formula.split("+").join(" + ").split("*").join(" * ").split(" ");
    let indexToAdd = formulaArray.indexOf("+");
    let newValue;
    while (indexToAdd > 0) {
        newValue = parseInt(formulaArray[indexToAdd - 1]) + parseInt(formulaArray[indexToAdd + 1]);
        formulaArray = [].concat(formulaArray.slice(0, indexToAdd - 1), String(newValue), formulaArray.slice(indexToAdd + 2, formulaArray.length));
        indexToAdd = formulaArray.indexOf("+"); continue;
    }
    let indexToMultiply = formulaArray.indexOf("*");
    while (indexToMultiply > 0) {
        newValue = parseInt(formulaArray[indexToMultiply - 1]) * parseInt(formulaArray[indexToMultiply + 1]);
        formulaArray = [].concat(formulaArray.slice(0, indexToMultiply - 1), newValue, formulaArray.slice(indexToMultiply + 2, formulaArray.length));
        indexToMultiply = formulaArray.indexOf("*"); continue;
    }
    return newValue;
}

// const evaluateLeftToRight = (formula) => {
//     let formulaArray = formula.split("+").join(" + ").split("*").join(" * ").split(" ");
//     let value = parseInt(formulaArray[0]);
//     for (let i = 1; i < formulaArray.length; i = i + 2) {
//         if (formulaArray[i] === "*") { 
//             value *= parseInt(formulaArray[i + 1]); 
//         } else { 
//             value += parseInt(formulaArray[i + 1]); 
//         }
//     }
//     return value;
// }