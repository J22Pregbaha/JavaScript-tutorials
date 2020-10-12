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