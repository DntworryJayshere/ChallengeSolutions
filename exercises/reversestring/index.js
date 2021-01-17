function reverse(str) {
	let reversed = '';
	for (let char of str) {
		reversed = char + reversed;
		debugger;
	}
	return reversed;
}

reverse('abbbccca');
module.exports = reverse;
