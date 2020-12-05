'use strict';

const getAllSeats = (inputData = [], numOfRows = 7, numOfColumns = 3) => {
    let results = [];
    for(let i = 0; i < inputData.length; i++) {
        let record = inputData[i];
        let rowData = record.substr(0, numOfRows);
        let columnData = record.substr(-numOfColumns);
        
        // console.log(rowData, columnData);
        let colNum = 0;
        let rowNum = 0;

        for (let ii = 0; ii < rowData.length; ii++) {
            let char = rowData.charAt(ii);
            if(char === 'B') {
                rowNum = rowNum + (Math.pow(2, (rowData.length - ii - 1)));
            }
        }
        for (let ii = 0; ii < columnData.length; ii++) {
            let char = columnData.charAt(ii);
            if(char === 'R') {
                colNum = colNum + (Math.pow(2, (columnData.length - ii - 1)));
            }
        }
        // console.log('RowNum', rowNum);
        // console.log('ColNum', colNum);
        
        const result = {
            record: record,
            rowData: rowData,
            columnData: columnData,
            rowNumber: rowNum,
            columnNumber: colNum,
            seatId: (rowNum * 8) + colNum
        }
        results.push(result);
    }


    return results;
}

module.exports = getAllSeats; 