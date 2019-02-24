// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     // Create a new array by spliting the string into an array
//     let newArray = str.split(" ");
//     // Create a new empty array
//     let finalWord = [];

//     // Loop through the split array visiting each word
//     for (let i = 0; i < newArray.length; i++) {
//         // We set word to equal the word we are looping through currently
//         let word = newArray[i];
//         // We target the first letter in the current word we are looping through and uppercase the letter
//         let part1 = word[0].toUpperCase();
//         // We slice the rest of the word not including the first letter and save it in a variable
//         let part2 = word.slice(1);
//         // We push the result of adding the capitalized letter and the sliced word
//         finalWord.push(part1 + part2);
//     }
//     // We return the final array with each word capitalized and join them together.
//     return finalWord.join(" ");

// }

function capitalize(str) {
    // Create an empty string called 'result'
    let result = '';

    // Create a loop that loops through each character in the string
    for (let i = 0; i < str.length; i++) {
        // If the character to the left is a space
        if (str[i - 1] === ' ') {
            // We will capitalize the current letter and add it to result
            result += str[i].toUpperCase();
        } else {
            // Else we just add it to the result from the get go
            result += str[i];
        }
    }
    // Return the result
    return result;

}

console.log(capitalize("Hey how are you there today. I am good, how aboout you"))

module.exports = capitalize;
