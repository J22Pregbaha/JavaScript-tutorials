var numberofBottles = 99;

while(numberofBottles > 0) {
	if (numberofBottles === 1) {
		wordForBottles = "bottle";
	} else {
		wordForBottles = "bottles";
	}
	console.log(numberofBottles + " " + wordForBottles + " of beer on the wall, " + numberofBottles + " " + wordForBottles + " of beer.");    
	numberofBottles--;
	
	console.log("Take 1 down and pass it around,");
	if (numberofBottles === 0) {
		console.log("No more of beer on the wall.");   
	} else {
		console.log(numberofBottles + " " + wordForBottles + " of beer on the wall.");  
	} 
}