// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!

// function steps(n) {
//     // From 0 to n iterate over the rows
//     for (let row = 0; row < n; row++) {
//         // Create an empty string
//         let stair = '';
//         // From 0 to N iterate over the columns
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// console.log(steps(10))

// Recursive Solution For Simple Print Statement
// function printNumber(n) {
//     if (n === 0) {
//         return;
//     }
    
//     return printNumber(n - 1);
// }
// console.log(printNumber(10))

// // Recursive Solution for Steps Algorithm
// function stairs(n, row = 0, stair = '') {
//    if (n === row) {
//     return;
//    }
//    if (n === stair.length) {
//     console.log(stair);
//     stairs(n, row + 1);
//     return;
//    }
//    if (stair.length <= row) {
//     stair += '#';
//    } else {
//        stair += ' ';
//    }
//    steps(n, row, stair);
// }

// console.log(stairs(10))

// module.exports = steps;

function box(n) {
    let count = n;
    console.log(count);
    let pound = '#';

    while (count > 0) {
        console.log(pound.repeat(n));
        count--;
    }
}

console.log(box(10))
