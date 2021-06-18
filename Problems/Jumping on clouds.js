// Coutesy of Hacker rank

/*There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 0 or 1. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.*/

function jumpingOnClouds(c) {
	let jump = 0;
	// Write your code here
	for (let i = 0; i < c.length; i++) {
		let currentElement = c[i];
		let nextElement = c[i+1];
		let upperElement = c[i+2];
		// Check if the element after the one directly after is zero and then just jump to that one
		if(currentElement==0 && upperElement==0) {
			jump++;
			c.splice(nextElement, 1); // If the upper element is zero, remove the next element since we skipped it
		} else if(currentElement==0 && nextElement==0) { // If just the next element is zero, jump
			jump++;
		}
	}
	
	return jump;
}

let c = 0 0 1 0 0 1 0;