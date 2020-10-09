const st = require('./save')
const file = './epic-clon.SAV'

module.exports.get = userDiscriminator => {
	let data = st.load(file)
	return data[userDiscriminator]
}

module.exports.store = (userDiscriminator, userdata) => {
	let data = st.load(file)
	data[userDiscriminator] = userdata
	st.save(file, data)
}