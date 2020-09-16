const waifus = require('../data/waifus')
var id = undefined

module.exports = message => {
	let response
	if (id==undefined) {
		let regex = String.raw`(` + getGirlsNames_toArray().join("|") + String.raw`)`
		let matches = message.match(new RegExp(regex,"i"))
		let matchedName = matches?matches[0]:""
		id = getGirlId(matchedName)
		if (id==undefined)
			response = "❔ *No te han respondido porque nadie sabe con quién estás hablando...*"
		else
			response = "***" + waifus[id].name + "***: H-hola >.<"
	} else {
	}
	return response
}

var getGirlsNames_toArray = () => {
	let output = []
	for (let i=0; i<waifus.length; i++)
		output.push(waifus[i].name.split(" ").join("|"))
	return output
}

var getGirlId = name => {
	for (let i=0; i<waifus.length; i++)
		if ( new RegExp(name, "i").test(waifus[i].name) )
			return i
	return undefined
}