const text = 'A quick fox';

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// expected output: Array ["fox"]

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// expected output: Array ["A", "quick", "fox"]

const regexpFoxQuality = /\w+(?= fox)/; // matches the word that precedes fox
console.log(text.match(regexpFoxQuality));
// expected output: Array ["quick"]


// Using Regex boundaries to fix buggy string.
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) Use ^ to fix the matching at the begining of the string, and right after newline.
buggyMultiline = buggyMultiline.replace(/^t/gim, 'h');
console.log(1, buggyMultiline); // fix the first 't' on every line by replacing it with 'h'

// 2) Use $ to fix matching at the end of the text.
buggyMultiline = buggyMultiline.replace(/aa$/gim, 'ee.');
console.log(2, buggyMultiline); // fix 'aa' at the end of the text by replacing it with 'ee.'

// 3) Use \b to match characters right on border between a word and a space.
buggyMultiline = buggyMultiline.replace(/\bi/gim, 't');
console.log(3, buggyMultiline); // fix the 'i's at the beginning of each word. Because '\b' represents white space

// 4) Use \B to match characters inside borders of an entity.
buggyMultiline = buggyMultiline.replace(/\Bo/gim, 'e');
console.log(4, buggyMultiline); // fix the 'o' in 'greon' by turning it to 'e'. Because '\B' represents a character

///////////// Matching the beginning of input using a ^ control character
let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

let fruitsThatStartWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsThatStartWithA);

let fruitsThatDoNotStartWithA = fruits.filter((fruit) => /^[^A]/.test(fruit));
console.log(fruitsThatDoNotStartWithA);

///////////// Basic negative lookahead assertion
console.log(/\d+(?!\.)/g.exec('3.141')); // matches a number only if it is not followed by a decimal point.
// output: [ '141', index: 2, input: '3.141' ]

let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a Lemon!";

let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotLemonRegex));

let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotOrangeRegex));

///////////// Lookbehind assertion
let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C',];

let ripe_oranges = oranges.filter((orange) => /(?<=ripe) orange/.test(orange));
console.log(ripe_oranges);