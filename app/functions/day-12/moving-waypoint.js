'use strict';

const movingWaypoint = (inputData = []) => {
    const turns = {
        90: {
            N: 'W',
            E: 'N',
            S: 'E',
            W: 'S'
        },
        180: {
            N: 'S',
            E: 'W',
            S: 'N',
            W: 'E'
        },
        270: {
            N: 'E',
            E: 'S',
            S: 'W',
            W: 'N'
        },
    };

    let movements = {
        N: 0,
        S: 0,
        E: 0,
        W: 0
    };

    let waypointPosition = {
        N: 1,
        S: 0,
        E: 10,
        W: 0
    };
    
    for (let i = 0; i < inputData.length; i++) {
        const row = inputData[i];
        const instruction = row.substr(0, 1);
        const increment = Number(row.substr(1));
        // console.log(row, instruction, increment);

        if(instruction === 'F') {
            movements.N = movements.N + (waypointPosition.N * increment);
            movements.E = movements.E + (waypointPosition.E * increment);
            movements.S = movements.S + (waypointPosition.S * increment);
            movements.W = movements.W + (waypointPosition.W * increment);
        } else if (instruction === 'R') {
            const changes = turns[increment];
            const newN = waypointPosition[changes['N']];
            const newE = waypointPosition[changes['E']];
            const newS = waypointPosition[changes['S']];
            const newW = waypointPosition[changes['W']];
            waypointPosition = {
                N: newN,
                E: newE,
                S: newS,
                W: newW
            };
        } else if (instruction === 'L') {
            const changes = turns[360 - increment];
            const newN = waypointPosition[changes['N']];
            const newE = waypointPosition[changes['E']];
            const newS = waypointPosition[changes['S']];
            const newW = waypointPosition[changes['W']];
            waypointPosition = {
                N: newN,
                E: newE,
                S: newS,
                W: newW
            };
        } else {
            waypointPosition[instruction] = waypointPosition[instruction] + increment;
        }
    }

    const netNorthSouth = Math.abs(movements.N - movements.S);
    const netEastWest = Math.abs(movements.E - movements.W);
    const total = netNorthSouth + netEastWest;
    movements.netNorthSouth = netNorthSouth;
    movements.netEastWest = netEastWest;
    movements.total = total;
    movements.waypointPosition = waypointPosition;


    return movements;
}

module.exports = movingWaypoint; 
