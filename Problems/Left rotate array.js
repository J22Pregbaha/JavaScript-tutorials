// Coutesy of Hacker rank

/*A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.*/

function rotLeft(a, d) {
	let rslt = a.slice(d).concat(a.slice(0,d));
	return rslt;
}

// Curiousity killed the cat
function rotRight(a, d) {
	for (let i = 0; i < d; i++) {
		let last = a.pop(); // remove last element
		a.unshift(last); // unshift adds one or more elements to the beginning of an array and returns the new length of the array
	}
	return a;
}

// Example:
let a = [1, 2, 3, 4, 5];
console.log(rotRight(a, 2));