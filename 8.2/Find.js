//Find iterates through an array, and once its callback results in true,
//it returns the first VALUE in the array that passed;
//returns undefined if callback never passes

Array.find((grade) => {
	return grade > 90
})

//Make a find algo

const myFind = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === true) return arr[i]
	}
}

//Find index is used when indexOf is too obtuse;
//ie we don't know the value, but we can pass find index conditional logic;
//Lets write a function that splits an array;

//First we find the index to make the split
const arraySplitter = (arr, elToCut) => {
	//Marks the index where our elToCut starts
	const indexToCut = arr.findIndex((el) => {
		return el > elToCut
	})
	//Build two new arrays
	const firstArr = arr.slice(0, indexToCut)
	const secArr = arr.slice(indexToCut)
	return [firstArr, secArr]
}
//Build findIndex

const myFindIndex = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === true) return i
	}
	return -1
}
