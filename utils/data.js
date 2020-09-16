const st = require('./save')
const filepath = './simdate.SAV'

module.exports.get = (userDisc) => {
	let data = st.load(filepath)
	return data[userDisc]
}

module.exports.store = (userDisc, userdata) => {
	let data = st.load(filepath)
	data[userDisc] = userdata
	st.save(filepath, data)
}