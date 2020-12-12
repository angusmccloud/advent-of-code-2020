'use strict';

const manhattanDistance = (inputData = []) => {
    const turns = {
        N: {
            90: 'E',
            180: 'S',
            270: 'W'
        },
        E: {
            90: 'S',
            180: 'W',
            270: 'N'
        },
        S: {
            90: 'W',
            180: 'N',
            270: 'E'
        },
        W: {
            90: 'N',
            180: 'E',
            270: 'S'
        },
    };

    let movements = {
        N: 0,
        S: 0,
        E: 0,
        W: 0
    };
    let facing = 'E';
    
    for (let i = 0; i < inputData.length; i++) {
        const row = inputData[i];
        const instruction = row.substr(0, 1);
        const increment = Number(row.substr(1));
        // console.log(row, instruction, increment);

        if(instruction === 'F') {
            movements[facing] = movements[facing] + increment;
        } else if (instruction === 'R') {
            facing = turns[facing][increment];
            // console.log('Now Facing', facing);
        } else if (instruction === 'L') {
            facing = turns[facing][360 - increment];
            // console.log('Now Facing', facing);
        } else {
            movements[instruction] = movements[instruction] + increment;
        }     
    }

    const netNorthSouth = Math.abs(movements.N - movements.S);
    const netEastWest = Math.abs(movements.E - movements.W);
    const total = netNorthSouth + netEastWest;
    movements.netNorthSouth = netNorthSouth;
    movements.netEastWest = netEastWest;
    movements.total = total;


    return movements;
}

module.exports = manhattanDistance; 
