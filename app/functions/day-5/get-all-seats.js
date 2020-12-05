'use strict';

const getAllSeats = (inputData = [], numOfRows = 7, numOfColumns = 3) => {
    let results = [];
    for(let i = 0; i < inputData.length; i++) {
        let record = inputData[i];
        let rowData = record.substr(0, numOfRows);
        let columnData = record.substr(-numOfColumns);
        rowData = rowData.replace(/B/g, '1');
        rowData = rowData.replace(/F/g, '0');
        columnData = columnData.replace(/R/g, '1');
        columnData = columnData.replace(/L/g, '0');

        let rowNum = parseInt(rowData, 2); // Convert Binary to Number
        let colNum = parseInt(columnData, 2); // Convert Binary to Number
        
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