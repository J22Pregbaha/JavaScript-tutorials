///////////// Looking for a series of digits
const randomData = "015 354 8787 687351 3512 8735";

const regexpFourDigits = /\b\d{4}\b/g;

// \b indicates a boundary, which means the expression shouldn't start in the middle of a word
// \d indicates a numeral/digit
// {4} indicates the \d (numeral/digit) should be indicated four times
// \b indicates a boundary, so it shouldn't go picking from other words or end in the middle of a word

console.log(randomData.match(regexpFourDigits));

///////////// Looking for a word (from the latin alphabet) starting with A
const aliceExcerpt = "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";

const regexpWordStartingWithA = /\b[aA]\w+/g;

// \b indicates a boundary, which means the expression shouldn't start in the middle of a word
// [aA] indicates the letter a or A
// \w+ indicates any character *from the latin alphabet*, multiple times (to include the entire word)

console.log(aliceExcerpt.match(regexpWordStartingWithA));

///////////// Looking for a word (from Unicode characters)
const nonEnglishText = "Приключения Алисы в Стране чудес";

const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;

// BMP goes through U+0000 to U+FFFF but space is U+0020

console.log(nonEnglishText.match(regexpBMPWord));