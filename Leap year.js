function isLeap(year) {   
	var leap = "Leap year.";
	var notLeap = "Not leap year.";
	var four = year % 4;
	var hundred = year % 100;
	var fourHundred = year % 400;
	if (four === 0) {
		if (hundred === 0) {
			if (fourHundred === 0) {
				return leap;
			} else {
				return notLeap;
			}
		} else {
			return leap;
		}
	} else {
		return notLeap;
	}
}

isLeap(1948);