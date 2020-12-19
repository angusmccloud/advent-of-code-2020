'use strict';

const question1 = (inputData = []) => {
    const rounds = 8;
    // const rounds = 1;
    const startSize = inputData.length;
    let cube = [];
    for(let i = 0; i < inputData.length; i++) {
        cube[i] = [];
        for(let ii = 0; ii < inputData.length; ii++) {
            cube[i][ii] = [];
            for(let iii = 0; iii < inputData.length; iii++) {
                let value = false;
                if((i + 1) === ((inputData.length ) / 2)) {                    
                    if(inputData[ii][iii] === "#") { 
                        value = true
                    };
                }
                cube[i][ii][iii] = value;
            }
        }
    }

    console.log('Starting Cube', cube);

    for (let round = 0; round < rounds; round++) {
        console.log(round, countActive(cube));
        cube = expandCube(cube);
        let outputCube = [];

        for(let i = 0; i < cube.length; i++) {
            outputCube[i] = [];
            for(let ii = 0; ii < cube.length; ii++) {
                outputCube[i][ii] = [];
                for(let iii = 0; iii < cube.length; iii++) {
                    const numActive = countNearbyActive(i, ii, iii, cube);
                    let status = cube[i][ii][iii];
                    // console.log(status, numActive);
                    if(status && numActive !== 2 && numActive !== 3) {
                        status = false;
                        // console.log('Flip to False');
                    } else if (!status && numActive === 3) {
                        status = true;
                        // console.log('Flip to True');
                    } 
                    
                    outputCube[i][ii][iii] = status;
                }
            }
        }

        // outputCube = expandCube(outputCube);

        cube = outputCube;
    }
    // console.log('-- Ending Cube --');
    // console.log(cube);

    let numActive = countActive(cube);
    return numActive;
}

module.exports = question1; 

const expandCube = (cube) => {
    const newSize = cube[0].length + 2;

    let emptyRow = [];
    for(let i = 0; i < newSize; i++) {
        emptyRow.push(false);
    }

    let newSide = [];
    for(let i = 0; i < newSize; i++) {
        newSide.push(emptyRow);
    }

    // Add false to start and end of each row (level 3)
    for(let i = 0; i < cube.length; i++) {
        for (let ii = 0; ii < cube.length; ii++ ) {
            cube[i][ii].push(false);
            cube[i][ii].unshift(false);
        }
        // add row of false to start and end of each slice (level 2)
        cube[i].push(emptyRow);
        cube[i].unshift(emptyRow);
    }

    // add new slices (level 1)
    cube.push(newSide);
    cube.unshift(newSide);

    return cube;
}

const countNearbyActive = (x, y, z, cube) => {
    let active = 0;
    for(let i = 0; i < 3; i++) {
        for(let ii = 0; ii < 3; ii++) {
            for(let iii = 0; iii < 3; iii++) {
                if(i !== 1 || ii !== 1 || iii !== 1) {
                    const checkx = x - 1 + i;
                    const checky = y - 1 + ii;
                    const checkz = z - 1 + iii;
                    if(cube[checkx] !== undefined && cube[checkx][checky] !== undefined && cube[checkx][checky][checkz] !== undefined && cube[checkx][checky][checkz]) {
                        active ++;
                    }
                }
            }
        }
    }
    return active;
}

const countActive = (cube) => {
    let numActive = 0;
    for(let i = 0; i < cube.length; i++) {
        for(let ii = 0; ii < cube.length; ii++) {
            for(let iii = 0; iii < cube.length; iii++) {
                const status = cube[i][ii][iii];
                if(status) {
                    numActive ++;
                }
            }
        }
    }
    return numActive;
}
