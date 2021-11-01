//what does filter do?
// 1) loops through array
// 2) creates new array
//3) pushes new values if filter returns true;
//4) all filter methods are evalutated to a boolean;

// testArr.filter((item)=>{
//     return item.length >= 20;
// })

//Builds a new array of items longer than 20 chars;
//Combining map and filter
let checkBoxes = document.querySelectorAll('input[type="checkbox"]')
//Creates a nodelist
const checked = Array.from(checkBoxes).filter((box) => {
	return box.checked
})
//The array generated above does not actually contain the values of completed todos;
//Instead checked will show in the console as [input, input];

//To access the actual content of our checked todos we need to map;

const completedText = checked.map((checkBox) => {
	return checkBox.parentElement.innerText
})
//Best practice to roll these into one function as follows:
const extractCompletedTodos = () => {
	//We still select allCheckBoxes
	let checkBoxes = document.querySelectorAll('input[type="checkbox"]')
	//Then we can optionally combine out operations into a single func:
	return Array.from(checkBoxes)
		.filter((box) => {
			return box.checked
		})
		.map((checkbox) => {
			return checkbox.parentElement.innerText
		})
}

//Let's recreate filter!

const myFilter = (arr, func) => {
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i], i, arr)) {
			return newArr.push(arr[i])
		}
		return newArr
	}
}
console.log(myFilter(someArr, truthyTest))
