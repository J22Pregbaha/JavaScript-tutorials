// Coutesy of Hacker rank

/*There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.*/

function hourglassSum(arr) {
	let currHourglassSum;
	let hourglassSumArray = [];
	let firstEl;
	let secondEl;
	let thirdEl;
	let fourthEl;
	let fifthEl;
	let sixthEl;
	let seventhEl;
	
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			firstEl = arr[i][j];
			secondEl = arr[i][j+1];
			thirdEl = arr[i][j+2];
			fourthEl = arr[i+1][j+1];
			fifthEl = arr[i+2][j];
			sixthEl = arr[i+2][j+1];
			seventhEl = arr[i+2][j+2];
			
			currHourglassSum = firstEl+secondEl+thirdEl+fourthEl+fifthEl+sixthEl+seventhEl;
			hourglassSumArray.push(currHourglassSum);
		}
	}
	const max = hourglassSumArray.reduce((a, b) => { return Math.max(a, b) }); // get the maximum value
	return max;
}

// Example:
let arr = [
[1,2,3,4,5,6],
[1,2,3,4,5,6],
[1,2,3,4,5,6],
[1,2,3,4,5,6],
[1,2,3,4,5,6],
[1,2,3,4,5,6]
];

// Example:
console.log(hourglassSum(arr));