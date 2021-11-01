//Calback review
function holler() {
	console.log('Heyooo')
}
const whisper = () => {
	console.log('psst!')
}
function add(x, y) {
	return x + y
}
function subtract(x, y) {
	return x - y
}
const multiply = (x, y) => {
	return x * y
}
const divide = (x, y) => {
	return x / y
}
const power = (x, y) => {
	return x ** y
}

const mathFuncs = [add, subtract, multiply, divide, power]

const doMath = (a, b, mathFunc) => {
	return mathFunc(a, b)
}
//We can call doMath with predefined functions like so:
// doMath(2, 4, divide)
//We can also define anon functions inline:
doMath(2, 4, (a, b) => {
	console.log(a ** b)
})
//Note we take param1 and param2 as params for our anon function.

const doAllMath = (a, b) => {
	for (let formula of mathFuncs) {
		console.log(formula(a, b))
	}
}
doAllMath(2, 4)
