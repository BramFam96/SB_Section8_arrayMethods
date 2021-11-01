const nums = [21, 37, 64, 99, 142]

const negated = nums.map((num) => {
	return -num
})
const doubler = nums.map((num) => {
	return num * 2
})

todos = [
	{ id: 1, text: 'eat breakfast', priority: 'high' },
	{ id: 2, text: 'do dishes', priority: 'medium' },
	{ id: 3, text: 'get to work', priority: 'high' },
	{ id: 4, text: 'take a break', priority: 'low' },
]
const todoTextArr = todos.map((todo) => {
	return todo.text
})
//WE CAN TURN ITERABLES INTO STANDARD ARRAYS: notabley NODELISTS
//when we querySelectorALL a nodeList we use:
//Array.from(source)
//Array.from(source)
//Array.from(source)
//Array.from(source)
//Array.from(source)
//Array.from(source)
//This converts our nodeslist into an iterable array!!!!

const myMap = (arr, cback) => {
	const newArr = []
	for (let num of arr) {
		newArr.push(cback(num))
	}
	return newArr
}

let mappedArray = myMap([1, 2, 3], (num) => {
	return num * 2
})
