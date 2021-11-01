// some -  hasOddNumber
const hasOddNumber = (arr) => {
	return arr.some((num) => {
		return num % 2 !== 0
	})
}
//some - has a zero
const hasAZero = (num) => {
	return num.toString.split('').some((num) => {
		return num === '0'
	})
}
//every - odd numbers
const onlyOddNumbers = (arr) => {
	return arr.every((num) => {
		return num % 2 !== 0
	})
}
//every - check that arr does not contain duplicates

const uniqueElements = (arr) => {
	return arr.every((el) => {
		return arr.indexOf(el) === arr.lastIndexOf(el)
	})
}
//every- check if specific key exist on every object in arr
const checkForKey = (arr, key) => {
	return arr.every((el) => {
		return key in el
	})
}
//every - check that every object has a specific value;
const checkForValue = (arr, key, target) => {
	return arr.every((item) => {
		return item[key] === target
	})
}
