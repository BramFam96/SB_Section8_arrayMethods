//forEach practice
//1) Doublevalues- write a function that doubles the values of an arr containing numbers;

const doubleValues = (arr) => {
    let doubledArr = []
	arr.forEach((element) => {
		doubledArr.push(element * 2)
	})
    return doubledArr;
}

//)2 onlyEvenValues - return a new array of only even values;

const onlyEvens = (arr) => {
    let newArr = [];
	arr.forEach((element) => {
		if (element % 2) {
			newArr.push(element)
		}
	})
    return newArr
}

//3) showFirstAndLast

const showFirstAndLast = () => {
    let newArr = [];
	arr.forEach((item) => {
		let length = item.length
		newArr.push(item[0] + item.[length-1])
        })
        return newArr;
    }
//4) addKeyValuePair - take an arr of objects and create a new array of key value pairs
const addKeyValuePair = (arrOfObjs, key, value) => {
arrOfObjs.forEach(child => {
child[key] = value;
})
return arrOfObjs;
}
//5) Create a list and count of vowels
const vowelCount = (str) => {
    const newObj = {};
    let letterArr = str.split('');  
    const vowelString = 'aeiou';
    letterArr.forEach(letter => {
        let formattedLetter  = letter.toLowerCase();
        if(vowelString.indexOf(formattedLetter) !== -1) {
            if (newObj[formattedLetter]) {
                newObj[formattedLetter]++;
            }else {
                obj[formattedLetter] = 1;
            }
        }
    })
    return newObj;
}

//Map exercises
//1) Double the values of an array;
const valueDoubler = (arr) => {
    return arr.map(num =>{
        return num * 2 })
}
//2) Multiply arr values by their index
const valTimesIndex = (arr) => {
    return arr.map((val, i)=> {
       return val * i; 
    })
}
//3) Extract the key from an arr of objs;
const extractTheKeys = (arr, key) => {
    return arr.map((item) => {
        return item[key] 
    })
}
//4) Extract a full name from an arr of objects;
const extractFullName = arr => {
    return arr.map(item => {
        return `${item.first} ${item.last}`
    })
}

//Filter excercises
//1) Filter an array with the given key
const filterByValue = (arr, key) => {
    return arr.filter(item => {
        return item[key] !== undefined;
    })
}
//2) Filter an array to find if it conatins a specific value;

const find = (arr, valToFind) => {
    return arr.filter(item => {
        return item === valToFind;
    })[0]
}
//3) Given an arr objs and a key, we should filter for some value and return the first found match
const findInObj = (arr, valToFind, key) => {
    return arr.filter(item => {
        return item[key] === valToFind;
    })[0]
}