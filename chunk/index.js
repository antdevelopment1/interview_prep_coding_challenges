// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// function chunk(array, size) {
//     // What do we have
//     // An array with five values - [1,2,3,4,5]

//     // What do we want 
//     // An array with with the number of things in an array based on the second value passe
//     // [[1,2,3], [1,2]]
//     const outerArray = [];

//     for (let index of array) {
//         const end = outerArray[outerArray.length - 1];
//         if (!end || end.length === size) {
//             outerArray.push([index]);
//         } else {
//             end.push(index);
//         }
//     }
//     return outerArray;
// }

// console.log(chunk([1,2,3,4,5], 2))






// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else  {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

function chunk(array, size) {
    // Create an empty array

    // Create an index variable

    // Set up a while loop that runs while the index is less than the arrays length
        // We push to our array the sliced portion of the index up until the the value based on the size argument that was passed
        // Change index to the next spot we to evaluate in the while loop

    // We return our new array
}

module.exports = chunk;
