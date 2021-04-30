///////////// Repeated pattern
let wordEndingWithAs = /\w+a+\b/;
let delicateMessage = "This is Spartaaaaaaa";

console.log(delicateMessage.match(wordEndingWithAs));

///////////// Counting characters
let singeLetterWord = /\b\w{1}\b/g; // just '\w' also works here
let notSoLongWord = /\b\w{1,6}\b/g;
let looongWord = /\b\w{13,}\b/g;

let sentence = "Why do I have to learn multiplication table?";

console.log(sentence.match(singleLetterWord));
console.log(sentence.match(notSoLongWord));
console.log(sentence.match(looongWord));

///////////// Counting characters
let britishText = "He asked his neighbour a favour.";
let americanText = "He asked his neighbor a favor.";

let regexpEnding = /\w+ou?r/g;

console.log(britishText.match(regexpEnding));
console.log(americanText.match(regexpEnding));

///////////// Greedy versus non-greedy
let text = "I must be getting somewhere near the centre of the earth.";
let greedyRegexp = /[\w ]+/g;

console.log(text.match(greedyRegexp));

let nonGreedyRegexp = /[\w ]+?/;

console.log(text.match(nonGreedyRegexp));