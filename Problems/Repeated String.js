// Coutesy of Hacker rank

/*There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.*/

function repeatedString(s, n) {
	// Write your code here
	let m;
	let rem;
	let count;
	
	m = Math.floor(n/s.length);
	rem = n % s.length;
	count = (s.split("a").length - 1) * m;
	for (let i = 0; i < rem; i++) {
		if(s[i] == "a") count++;
	}
	
	return count;
}

let n = 10;
let s = "aba";