//1) Extract values from obj

const extractValues = (userArr, name) => {
	return userArr.reduce((newArr, nextUser) => {
		newArr.push(nextUser[name])
		return newArr
	}, [])
}

//2) vowelCount
const vowelCount = (str) => {
	const vowelStr = 'aeiou'
	const strArr = str.split('')
	return strArr.reduce((vowelCount, nextChar) => {
		vowelStr.indexOf(nextChar.toLowerCase()) !== -1
			? vowelCount[nextChar.toLowerCase()]++
			: (vowelCount[nextChar.toLowerCase()] = 1)

		return vowelCount
	}, {})
}
//3) addKeyValuePair

const addKeyAndValue = (arrOfObjs, key, value) => {
	return arrOfObjs.reduce((newArrOfObjs, nextObj, currentIndex) => {
		newArrOfObjs[currentIndex][key] = value
		return newArrOfObjs
	}, arrOfObjs)
}
//4) partition into two arrays

const partition = (arr, callback) => {
	return arr.reduce(
		(newArrOfArrs, nextVal) => {
			callback(nextVal)
				? newArrOfArrs[0].push(nextVal)
				: newArrOfArrs[1].push(nextVal)
		},
		[[], []]
	)
}
