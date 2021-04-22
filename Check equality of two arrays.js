Array.prototype.equals = function(arr2) {
	return (
		this.length === arr2.length &&
		this.every((value, index) => value === arr2[index])
		);
};

[1, 2, 3].equals([1, 2, 3]);	// true
[1, 2, 3].equals([3, 6, 4, 2]);	// false