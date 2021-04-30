///////////// Examples
const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
const regexpWithoutE = /\b[a-df-z]+\b/g; // check if each word has every letter except E
console.log(aliceExcerpt.match(regexpWithoutE));

const imageDescription = 'This image has 1440x900 pixels';
const regexpSize = /([0-9]+)x([0-9]+)/;
const match = imageDescription.match(regexpSize);

console.log(`Height: ${match[1]} / Weight: ${match[2]}`);

///////////// Counting vowels
const aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[aeiou]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);

///////////// Using groups
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames = /First_Name: (\w+), Last_Name: (\w+)/mg;
let match = regexpNames.exec(personList);

do{
	console.log(`Hello: ${match[1]} ${match[2]}`);
}while((match = regexpNames.exec(personList)) !== null);

///////////// Using named groups
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames = /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/mg;
let match = regexpNames.exec(personList);

do{
	console.log(`Hello: ${match.groups.firstname} ${match.groups.lastname}`);
}while((match = regexpNames.exec(personList)) !== null);