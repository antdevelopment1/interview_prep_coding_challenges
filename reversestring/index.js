// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

//Takes a string and uses the split method to split each character into an array, reverse the order, and joins the result back together.
  return str.split("").reverse().join("");
}
module.exports = reverse;
