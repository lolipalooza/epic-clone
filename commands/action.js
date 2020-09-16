const Discord = require('discord.js')
const data = require('../utils/data')
const rand = require('../utils/utils').rand
const locations = require('../data/location').locations
const waifus = require('../data/waifus')
const schedules = require('../utils/schedules')

module.exports.get = message => {
	
	let d = data.get(message.author.discriminator)
	let location = d.stats.location
	let actions = locations.getParameter(location, "actions")
	
	let response
	
	if ( actions != "" ) {
		
		response = new Discord.RichEmbed() 
			.setTitle("Acciones para " + location + ":")
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			//.setColor(0x00AE86)
			.setDescription(actions.split("|").join(" | ") + "\n\nEjecuta la acción con el comando `sd.<accion>`")
			//.setFooter("Fortuna", client.user.avatarURL)
			.setThumbnail(message.author.displayAvatarURL)
			//.setTimestamp()
			//.addField("Lugares a donde ir:", locations.toArray().join(" | "))
		
	} else {
		response = "🚫 No hay ninguna acción para ejecutar en este sitio por el momento..."
	}
	
	message.channel.send( response )
}

module.exports.listen = message => {
	
	let d = data.get(message.author.discriminator)
	if (d) {
		let location = d.stats.location
		let actions = locations.getParameter(location, "actions")
		
		let regex = String.raw`sd\.(` + actions + String.raw`)$`
		
		if ( new RegExp( regex, "i" ).test(message.content) ) {
			return message.content.match(new RegExp( regex, "i" ))[1]
		} else {
			return undefined
		}
	}
	return undefined
}

module.exports.exec = (message, action) => {
	
	let d = data.get(message.author.discriminator)
	if (!d) return
	
	switch(action) {
		case "entrenar":	train	(d, message);	break
		case "mirar":		look	(d, message);	break
		case "dormir":		sleep	(d, message);	break
		case "estudiar":	study	(d, message);	break
		case "beber":		drink	(d, message);	break
		case "trabajar":	work	(d, message);	break
	}
	
	data.store(message.author.discriminator, d)
}

function train(d, message) {
	if (d.stats.energy < 8) {
		message.channel.send( "🚫 Te haz quedado sin energía para realizar esta actividad. Deberías ir a descanzar." )
	} else {
		let strength = rand(1,4)
		d.stats.strength += strength
		d.stats.energy -= rand(8,15)
		if (d.stats.energy < 0) d.stats.energy = 0
		message.channel.send( ":lifter: Haz entrenado por 1 hora\nHaz adquirido +" + strength + " de fuerza!" )
	}
}

function look(d, message) {
	let availableGirlsIds = schedules.checkAvailableWaifus(d.stats.location)
	if (availableGirlsIds.length==0) {
		message.channel.send( "👓 ```" + d.stats.location + "``` Aquí no hay nada interesante." )
	} else {
		let response = "👓 ```" + d.stats.location + "``` ***Chicas disponibles:*** "
		let names = []
		for (let i=0; i<availableGirlsIds.length; i++)
			names.push( waifus[availableGirlsIds[i]].name )
		response += names.join(" | ")
		response += "\n\nHáblale a las chicas con `sd.msj <mensaje>`"
		response += "\nDeberías escoger a una para saludarla escribiendo su nombre como parte del mensaje."
		response += "\nSolo puedes hablar con una a la vez."
		message.channel.send( response )
	}
}

function sleep(d, message) {
	d.stats.energy = d.stats.max_energy
	message.channel.send( "💤 Te haz hechado una larga siesta y haz recuperado toda tu energía!" )
}

function study(d, message) {
	if (d.stats.energy < 8) {
		message.channel.send( "🚫 Te haz quedado sin energía para realizar esta actividad. Deberías ir a descanzar." )
	} else {
		let intelligence = rand(1,4)
		d.stats.intelligence += intelligence
		d.stats.energy -= rand(8,15)
		if (d.stats.energy < 0) d.stats.energy = 0
		message.channel.send( "📚 Haz estudiado por 1 hora\nHaz adquirido +" + intelligence + " de inteligencia!" )
	}
}

function drink(d, message) {
	if (d.stats.energy < 4) {
		message.channel.send( "🚫 Te haz quedado sin energía para realizar esta actividad. Deberías ir a descanzar." )
	} else if (d.stats.money < 4/5) {
		message.channel.send( "💵 No tienes suficiente dinero para hecharte unos tragos." )
	} else {
		let charm = rand(0,3)
		let cost = rand(4,8) / 5
		d.stats.charm += charm
		d.stats.energy -= rand(4,8)
		d.stats.money -= cost
		if (d.stats.energy < 0) d.stats.energy = 0
		message.channel.send( "🍻 Te haz relajado por 1 hora\nHaz adquirido +" + charm + " de carisma!\nGastaste $***" + cost + "***..." )
	}
}

function work(d, message) {
	if (d.stats.energy < 8) {
		message.channel.send( "🚫 Te haz quedado sin energía para realizar esta actividad. Deberías ir a descanzar." )
	} else {
		let money = rand(2,3) * d.stats.intelligence / 10 + 1
		d.stats.money += money
		d.stats.energy -= rand(8,15)
		if (d.stats.energy < 0) d.stats.energy = 0
		message.channel.send( "💻 Trabajaste por 1 hora\nHaz ganado $" + money + "!" )
	}
}