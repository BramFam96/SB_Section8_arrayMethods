const users = [
	{ username: 'mlewis' },
	{ username: 'akagen' },
	{ username: 'msmith' },
]
const findUserByUserName = (users, username) => {
	return users.find((user) => {
		return user.username === username
	})
}
const removeUser = (users, username) => {
	let index = users.findIndex((user) => {
		return user.username === username
	})
	if (index === -1) return
	return usersArray.splice(index, index + 1)
}
