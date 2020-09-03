var name = prompt("What is your name?");
var nameLength = name.length;
var firstLetter = name.slice(0,1);
var remainingLetters = name.slice(1,nameLength).toLowerCase();

alert("Hey there, " + firstLetter.toUpperCase() + remainingLetters);