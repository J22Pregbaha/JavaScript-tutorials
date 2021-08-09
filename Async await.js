async function firstAsync() {
	return 27;
}

firstAsync().then((result) => console.log(result)); // 27


async function secondAsync() {
	let promise = new Promise((res, rej) => {
		setTimeout(() => res("Now it's done!"), 1000);
	});

	// wait until the promise returns a value
	let result = await promise;

	// Now it's done!
	return result;
}

secondAsync().then((result) => console.log(result));

///////////////////// RUNNING ASYNC METHODS IN PARALLEL /////////////////////

async function sequence() {
	let promise1 = new Promise((res, rej) => {
		setTimeout(() => res("This is promise 1"), 500);
	});

	let promise2 = new Promise((res, rej) => {
		setTimeout(() => res("This is promise 2"), 500);
	});

	await Promise.all([promise1, promise2]);  
	
	return "Sequence done!";
}

sequence().then((result) => console.log(result));

///////////////////// OR /////////////////////

async function parallel() {
	// Start a 500ms timer asynchronously…
	let promise1 = new Promise((res, rej) => {
		setTimeout(() => res("This is promise 1"), 50);
	});
	// …meaning this timer happens in parallel.
	let promise2 = new Promise((res, rej) => {
		setTimeout(() => res("This is promise 2"), 50);
	});

	// Wait 500ms for the first timer…
	await promise1; 
		
	// …by which time this timer has already finished.
	await promise1; 

	return "Parallel done!";
}

parallel().then((result) => console.log(result));