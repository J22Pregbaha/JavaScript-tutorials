let promise = new Promise(function(resolve, reject) {
	setTimeout(() => {
		resolve(console.log("Promise resolved!"));
	}, 2000);
});

console.log(promise);

/*Output:
Promise { <pending> }
Promise resolved!*/

new Promise(function(resolve, reject) {

	setTimeout(() => resolve(1), 1000); 

}).then(function(result) { 

	console.log(result); 
	return result * 3;

}).then(function(result) { 

	console.log(result); 
	return result * 4;

}).then(function(result) {

	console.log(result);
	return result * 6;

});

/*Output:
1
3
12*/