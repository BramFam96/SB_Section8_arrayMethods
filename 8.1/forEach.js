//forEach practice
const colors = ['teal', 'cyan', 'peach', 'purple']

colors.forEach((val) => {
	console.log(val.toUpperCase())
})

const prices = [30.0, 20, 2, 100]
let total = 0

prices.forEach((price) => {
	total += price
})
console.log(total)

const customCallBack = (el) => {
	console.log(el)
}

const customForEach = (arr, func) => {
	for (let el of arr) {
		func(el)
	}
}
customForEach(prices, (el) => {
	console.log(el)
})
