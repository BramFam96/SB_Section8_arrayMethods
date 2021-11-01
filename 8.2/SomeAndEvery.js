//Some is sometimes called any in other languages;
//Some is an array method that runs a callback, and returns true if a single value passes;

//We must use a return statement. Check methods will always be false if they do not return;

const mySome = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) return true
	}
	return false
}

//Every is the counter array method to some;
//Every will loop through an array, and returns true if EVERY item passes the check;
const myEvery = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (!callback(arr[i], i, arr)) return false
	}
	return true
}
