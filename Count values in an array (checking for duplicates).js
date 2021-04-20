// Loop through the array, check if the current number is equal to the value you want to count, if it is, add it to the accumulator.
// If not, leave the accumulator as 0.
const countElements = (arr, val) => arr.reduce((accumulator, currentNumber) => 
	(currentNumber === val ? accumulator + 1 : accumulator)
	, 0);

const checkDuplicate = (arr, val) => {
	countElements(arr, val) > 1 ? console.log("Duplicate") : console.log("Not a duplicate");
}

// console.log(countElements([1, 1, 2, 1, 2, 3], 1));
// console.log(checkDuplicate([1, 1, 2, 1, 2, 3], 1));