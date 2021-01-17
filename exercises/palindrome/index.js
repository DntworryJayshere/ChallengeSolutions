function palindrome(str) {
	let reversed = '';
	for (let char of str) {
		reversed = char + reversed;
		debugger;
	}

	return str === reversed;
}

palindrome('abba');
module.exports = palindrome;
