// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!

function steps(n) {
    // From 0 to n iterate over the rows
    for (let row = 0; row < n; row++) {
        // Create an empty string
        let stair = '';
        // From 0 to N iterate over the columns
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

console.log(steps(10))

module.exports = steps;
