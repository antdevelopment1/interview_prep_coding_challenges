// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const string = 'Hello There!';
    const letters = {};
    // If we don't check with an if condition first and try to say letters[letter] = letters[letter] + 1 before checking to see ig it already exsists
    // then we will be adding 1 to undefined which results in our keys values being null
    for (let letter of string) {
        if (!letters[letter]) {
            letters[letter] = 1;
        } else {
            letters[letter]++;
        }
    }
    return letters;
}


module.exports = maxChar;
