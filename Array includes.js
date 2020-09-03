var guestList = ["Angela", "Jack", "James", "Lara"];
var username = prompt("Please enter your name");

if (guestList.includes(username)) {
    alert("Welcome!");
} else {
    alert("Nope!");
}