// I started a new job and the shift pattern is 4 days on and 4 days off so I wanted to c=be able to check which days I'm on and which days I'm off in the year 2020

let startDate = new Date("2020-10-28"); // The date I started the shift

const daysOnAdnOff = 4; // Number of days I have on and off

const daysWorking = []; // The dates I will be working
const daysOff = []; // The dates I will be off

addDaysWorking(daysOnAdnOff);

function addDaysWorking(daysOnAdnOff) {
	for (var i = 0; i < daysOnAdnOff; i++) {
		daysWorking.push(startDate.getDate() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getFullYear());
		startDate.setDate(startDate.getDate() + 1);
	}

	startDate.getFullYear() === 2020 ? addDaysOff(daysOnAdnOff) : null;
}

function addDaysOff(daysOnAdnOff) {
	for (var i = 0; i < daysOnAdnOff; i++) {
		daysOff.push(startDate.getDate() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getFullYear());
		startDate.setDate(startDate.getDate() + 1);
	}

	startDate.getFullYear() === 2020 ? addDaysWorking(daysOnAdnOff) : null;
}

function checkDate(date) {
	daysWorking.includes(date) ? console.log("Working") : console.log("Day off");
}

checkDate("25-12-2020"); // Date format is D-MM-YYYY