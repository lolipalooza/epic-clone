const fs = require('fs')

module.exports.load = file => {
	if (fs.existsSync(file)) {
		return JSON.parse( fs.readFileSync(file) )
	} else {
		return { }
	}
}

module.exports.save = (file, data) => {
	fs.writeFileSync(file, JSON.stringify(data))
}