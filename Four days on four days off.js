// I started a new job and the shift pattern is 4 days on and 4 days off so I wanted to c=be able to check which days I'm on and which days I'm off in the year 2020 and 2021

let startDate = new Date("2020-10-28"); // The date I started the shift

const daysOnAdnOff = 4; // Number of days I have on and off

const daysWorking = []; // The dates I will be working
const daysOff = []; // The dates I will be off

addDaysWorking(daysOnAdnOff);

function addDaysWorking(daysOnAndOff) {
    if (startDate.getDay() === 6 || startDate.getDay() === 0){ //this accounts for the weekends
        startDate.setDate(startDate.getDate() +1);
    }
    else{
        for (var i = 0; i < daysOnAndOff; i++) {
            daysWorking.push(startDate.getDate() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getFullYear());
            startDate.setDate(startDate.getDate() + 1);
        }
    }

    startDate.getFullYear() === 2021 ? addDaysOff(daysOnAndOff) : null;
}

function addDaysOff(daysOnAndOff) {
    for (var i = 0; i < daysOnAndOff; i++) {
        daysOff.push(startDate.getDate() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getFullYear());
        startDate.setDate(startDate.getDate() + 1);
    }

    startDate.getFullYear() === 2021 ? addDaysWorking(daysOnAndOff) : null;
}



function checkDate(date) {
    daysWorking.includes(date) ? console.log("Working") : console.log("Day off");
}

let currentDate = new Date(); // automatically gets the current date to know if i should sleep or get out of bed
let x = currentDate.getDate() +"-"+ (currentDate.getMonth() +1) +"-"+ currentDate.getFullYear();
checkDate(x); // Date format is D-MM-YYYY
