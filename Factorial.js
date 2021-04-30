///////// RECURSIVE PROGRAMMING

function factorialize(num) {
	if(num < 2) return 1;
	return num *= factorialize(num - 1);
}

/** OR **/

function factorial(n) {
	if (n < 0) return;
	if (n < 2) return 1;
	return n * factorial(n - 1);
}

///////// DYNAMIC PROGRAMMING

// 1. Top-down with Memoization

function findFactorial(n) {
	const memoize = [];

	function getFactorial(n) {
		if(n < 2) return 1;

		if(memoize[n]) return memoize[n];

		memoize[n] = n * getFactorial(n-1);
		return memoize[n];
	}

	return getFactorial(n);
}

//2. Bottom-up with Tabulation

function calcFactorial(n) {
	const dp = [0,1];

	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i-1] * i;
	}

	return dp[n];
}