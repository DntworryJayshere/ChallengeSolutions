// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// let reversed = '';
// for (let character of str) {
//     reversed = character + reversed;
//     debugger;
// }
// return reversed;


// const arr = str.split('');
// arr.reverse();
// return arr.join('');

// return str.split('').reverse().join('')

//es5 -- do not like this solution but it uses advanced array helper of reduce. 
// return str.split('').reduce((reversed, character) => {
//     return character + reversed
// }, '');