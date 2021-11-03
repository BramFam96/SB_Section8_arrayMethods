//Reduce is troublesome because of its broad versatility and use-cases;
//It can extract data, create a new datastructures, or any other
//operation that reduce a dataset to a single value;

const nums = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85]

//find sum
let tot = 0
for (let num of nums) {
	total += num
}
console.log(total)

//find min
let min = nums[0]
for (let i = 1; i < num.length; i++) {
	if (nums[i] < min) min = nums[i]
}
console.log(`min is ${min}`)

const str = 'lollapalooza'
const charFreq = {}
for (let char of str) {
	if (charFreq[char]) charFreq[char] += 1
	else charFreq[char] = 1
}
console.log(charFreq)
//Reduce iterates through an arr and takes a callback like our other methods
//main diff is reduce's callback accepts an accumulator and a name for our individual value
//Accumulator will defualt to arr[0] on initialization, but can be pass a init val if we choose
//Reduce will update our accumulator when the callback passes;

//ie we can reduce for sum, or median
//we can also reduce into an object -> ie count of letters in a string

//find min

Array.reduce((min, nextVal) => {
	return nextVal < min ? nextVal : min
}, 'Optional accumulator starting value')
