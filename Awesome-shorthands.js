/*** MERGE ARRAYS ***/

let apples = ['🍎', '🍏'];
let fruits = ['🍉', '🍊', '🍇', ...apples];  // <-- here

console.log(fruits);
//=> ["🍉", "🍊", "🍇", "🍎", "🍏"]


/*** Merge Arrays (but at the start) ***/
let fruitsFront = [...apples, '🥭', '🍌', '🍒'];  // <-- here
console.log(fruitsFront);
//=> ["🍎", "🍏", "🥭", "🍌", "🍒"]


/*** Clone Array ***/
let cloneFruits = [...fruits];  // <-- here
console.log(cloneFruits);
//=> ["🍉", "🍊", "🍇", "🍎"]


/*** Destructuring Assignment ***/
let [redApple, greenApple] = apples;  // <-- here
console.log(redApple);    //=> 🍎
console.log(greenApple);  //=> 🍏


/*** Template literals ***/
let name = 'Palash';
console.log(`Hello, ${name}!`);  // <-- No need to use + var + anymore
//=> Hello, Palash!


/*** For Loop ***/
// Using for...of statement 
for (let fruit of fruits) {
	console.log(fruit);
}

//=> 🍉
//=> 🍊
//=> 🍇
//=> 🍎


/*** Arrow Functions ***/
// Using for...of statement 
fruits.forEach(fruit => console.log(fruit));  // <-- Magic ✨

//=> 🍉
//=> 🍊
//=> 🍇
//=> 🍎


/*** Find an object in an array ***/
let inventory = [
	{name: 'Bananas', quantity: 5},
	{name: 'Apples', quantity: 10},
	{name: 'Grapes', quantity: 2}
];

function getApples(arr) {
	return arr.find(obj => obj.name === 'Apples');  // <-- here
}

let result = getApples(inventory);
console.log(result);
//=> { name: "Apples", quantity: 10 }


/*** Convert String to Integer ***/
let num = +"10";

console.log( num )           //=> 10
console.log( typeof num )    //=> "number"
console.log( +"10" === 10 )  //=> true


/*** Short-circuit Evaluation ***/
function getUserRole(role) {
	return role || 'USER';  // <-- here
}

console.log(getUserRole());         //=> "USER"
console.log(getUserRole('ADMIN'));  //=> "ADMIN"

console.log("Read the article here: https://stackoverflow.com/questions/36295789/put-link-in-console-log-node-js/36295889")
