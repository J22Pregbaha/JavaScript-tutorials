// Note: For Unicode property escapes to work, a regular expression must use the u flag which indicates a string must be considered as a series of Unicode code points.

// Note: Some Unicode properties encompasses much more characters than some character classes (such as \w which matches only latin letters, a to z) but the latter is better supported among browsers (as of January 2020).

///////////// Syntax
/*
// Non-binary values
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}

// Binary and non-binary values
\p{UnicodeBinaryPropertyName}

// Negation: \P is negated \p
\P{UnicodePropertyValue}
\P{UnicodeBinaryPropertyName}
*/

///////////// Examples
let sentence = 'A ticket to 大阪 costs ¥2000 👌.';

let regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));

let regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));

let regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));

///////////// General Categories
// finding all the letters of a text
let story = "It’s the Cheshire Cat: now I shall have somebody to talk to.";

// Most explicit form
story.match(/\p{General_Category=Letter}/gu);

// It is not mandatory to use the property name for General categories
story.match(/\p{Letter}/gu);

// This is equivalent (short alias):
story.match(/\p{L}/gu);

// This is also equivalent (conjunction of all the subcategories using short aliases)
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);

///////////// Scripts and script extensions
let mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script_Extensions=Latin}/u);

// Using a short alias for the script
mixedCharacters.match(/\p{Script=Greek}/u);

mixedCharacters.match(/\p{Script=Cryllic}/u);

// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script        super()

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]

///////////// Unicode property escapes vs. character classes
// Trying to use ranges to avoid \w limitations:
let nonEnglishText = "Приключения Алисы в Стране чудес";
let regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;

console.log(nonEnglishText.match(regexpBMPWord));

// Using Unicode property escapes instead
let regexpUPE = /\p{L}+/gu;

console.log(nonEnglishText.match(regexpUPE));