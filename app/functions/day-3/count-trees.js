'use strict';

const { start } = require("repl");

const countTrees = (inputData = [], rowIncrementer = 1, columnIncrementer = 3, startRow = 0, startColumn = 0) => {
    let trees = 0;
    let notTrees = 0;
    for (let i = 0; i < inputData.length / rowIncrementer; i++) {
        const rowIndex = startRow + (i * rowIncrementer);
        const currentRow = inputData[rowIndex];
        const targetColumn = startColumn + (i * columnIncrementer);
        const rowLength = currentRow.length;
        const realColumn = (targetColumn % rowLength);
        const charAtPosition = currentRow.charAt(realColumn);
        if(charAtPosition === ".") {
            notTrees ++;
        } else {
            trees ++;
        }

        // console.log(`Row ${i}, column ${targetColumn}, row length is ${rowLength}, remainder?? ${realColumn}, Character ${charAtPosition}, Total Trees ${trees}`);
    }
    return trees;
}

module.exports = countTrees; 