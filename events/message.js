const help			= require('../commands/help')
const storage		= require('../commands/storage')
const status		= require('../commands/status')
const location		= require('../commands/location')
const action		= require('../commands/action')
const chatmachine	= require('../commands/chatmachine')

const schedule = require('../utils/schedules')

module.exports = (client, message) => {
	if ( /^sd\.ayuda/i.test(message.content) ) {
		return help(message)
	}
	
	if ( /^sd\.iniciar/i.test(message.content) ) {
		storage.init(message)
	}
	
	if ( /^sd\.status$/i.test(message.content) ) {
		status(message)
	}
	
	if ( /^sd\.status\.ubicacion/i.test(message.content) || /^sd.ciudad$/i.test(message.content) ) {
		location.get(message)
	}
	
	if ( /^sd\.ciudad\.ir(_a)?\(.+?\)$/i.test(message.content) || /^sd\.viaje\(.+?\)$/i.test(message.content) ) {
		location.set(message)
	}
	
	if ( /^sd\.acciones$/i.test(message.content) ) {
		action.get(message)
	}
	
	{
		let _message = message
		let _action = action.listen(_message)
		if ( _action )
			action.exec(_message, _action)
	}
	
	if ( /^sd\.msj .+$/i.test(message.content) ) {
		let msg = message.content.match(/^sd\.msj (.+?)$/i)[1]
		let response = chatmachine(msg)
		message.channel.send( response )
	}
	
	if ( /^sd\.test$/i.test(message.content) ) {
	}
	
	if ( /^debug\.waifus \d+$/i.test(message.content) ) {
		let id = message.content.match(/\d+/)[0]
		let waifus = require("../data/waifus")
		let response = ""
		if (waifus[id]) {
			let date = require('../utils/schedules').date
			response += "```" + waifus[id].name + "```\n"
			for (let i=0; i<7; i++)
				response += "`schedule[" + i + "]`: " + waifus[id].schedules[i].join(", ") + "\n\n"
			response += "current date: `" + date + "`\n"
		} else {
			response += "⚠ `waifus[" + id + "]` is not defined"
		}
		message.channel.send(response)
	}
	
	if ( /^debug\.waifus\(\d+\)\.mover\(\w+\)$/i.test(message.content) ) {
		let matches = message.content.match(/^debug\.waifus\((\d+)\)\.mover\((\w+)\)$/i)
		let id = matches[1]
		let place = matches[2]
		let waifus = require("../data/waifus")
		waifus[id].schedules[0][new Date().getHours()] = place
		message.channel.send("```DEBUG```Haz forzado a ***" + waifus[id].name + "*** a estar en *" + place + "* durante la siguiente hora (" + new Date().getHours() + ":" + new Date().getMinutes() + ")")
	}
}