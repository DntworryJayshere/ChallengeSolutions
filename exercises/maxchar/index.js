// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charObject = {};
	let max = 0;
	let maxChar = '';

	for (char of str) {
		if (charObject[char]) {
			charObject[char]++;
		} else {
			charObject[char] = 1;
		}
		debugger;
	}

	for (char in charObject) {
		if (charObject[char] > max) {
			max = charObject[char];
			maxChar = char;
		}
	}

	return maxChar;
}

maxChar('thetoptally');
module.exports = maxChar;

// const charObject = {};
// let max = 0;
// let maxChar = '';

// for (let char of str) {
//     if (!charObject[char]) {
//         charObject[char] = 1
//     } else {
//        charObject[char]++;
//     }
// }

// for (let char in charObject) {
//     if (charObject[char] > max) {
//         max = charObject[char];
//         maxChar = char;
//     }
// }

// return maxChar;
