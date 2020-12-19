'use strict';

const question2 = (inputData = []) => {
    // const rounds = 8;
    const rounds = 1;
    const startSize = inputData.length;
    let cube = [];
    for(let i = 0; i < inputData.length; i++) {
        cube[i] = [];
        for(let ii = 0; ii < inputData.length; ii++) {
            cube[i][ii] = [];
            for(let iii = 0; iii < inputData.length; iii++) {
                cube[i][ii][iii] = [];
                for(let iiii = 0; iiii < inputData.length; iiii++) {
                    let value = false;
                    const target = ((inputData.length + 1) / 2);
                    if((i + 1) === target && (ii + 1) === target) {                    
                        if(inputData[iii][iiii] === "#") { 
                            value = true
                        };
                    }
                    cube[i][ii][iii][iiii] = value;
                }
            }
        }
    }

    console.log('Starting Cube', cube);
    // console.log(cube[1]);

    for (let round = 0; round < rounds; round++) {
        console.log(round, countActive(cube));
        cube = expandCube(cube);
        console.log("-- Expanded Cube --", cube);
        let outputCube = [];

        for(let i = 0; i < cube.length; i++) {
            outputCube[i] = [];
            for(let ii = 0; ii < cube.length; ii++) {
                outputCube[i][ii] = [];
                for(let iii = 0; iii < cube.length; iii++) {
                    outputCube[i][ii][iii] = [];
                    for(let iiii = 0; iiii < cube.length; iiii++) {
                        const numActive = countNearbyActive(i, ii, iii, iiii, cube);
                        let status = cube[i][ii][iii][iiii];
                        // console.log(status, numActive);
                        if(status && numActive !== 2 && numActive !== 3) {
                            status = false;
                            // console.log('Flip to False');
                        } else if (!status && numActive === 3) {
                            status = true;
                            // console.log('Flip to True');
                        } 
                        
                        outputCube[i][ii][iii][iiii] = status;
                    }
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

module.exports = question2; 

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

    let newCube = [];
    for(let i = 0; i < newSize; i++) {
        newCube.push(newSide);
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

    // add new cubes (level wtf)
    cube.push(newCube);
    cube.unshift(newCube);

    return cube;
}

const countNearbyActive = (x, y, z, w, cube) => {
    let active = 0;
    for(let i = 0; i < 3; i++) {
        for(let ii = 0; ii < 3; ii++) {
            for(let iii = 0; iii < 3; iii++) {
                for(let iiii = 0; iiii < 3; iiii++) {
                    if(i !== 1 || ii !== 1 || iii !== 1 || iiii !== 1) {
                        const checkx = x - 1 + i;
                        const checky = y - 1 + ii;
                        const checkz = z - 1 + iii;
                        const checkw = w - 1 + iiii;
                        if(cube[checkx] !== undefined && cube[checkx][checky] !== undefined && cube[checkx][checky][checkz] !== undefined && cube[checkx][checky][checkz][checkw] !== undefined && cube[checkx][checky][checkz][checkw]) {
                            active ++;
                        }
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
                for(let iiii = 0; iiii < cube.length; iiii++) {
                    const status = cube[i][ii][iii][iiii];
                    if(status) {
                        numActive ++;
                    }
                }
            }
        }
    }
    return numActive;
}
