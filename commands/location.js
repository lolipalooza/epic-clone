const Discord = require('discord.js')
const data = require('../utils/data')
const rand = require('../utils/utils').rand
const images = require('../data/location').cityImages
const locations = require('../data/location').locations

module.exports.get = message => {
	
	let d = data.get(message.author.discriminator)
	let image
	
	let time = new Date()
	if ( time.getHours() < 11 )
		image = images[0]
	else if ( time.getHours() >= 11 && time.getHours() < 17 )
		image = images[1]
	else if ( time.getHours() >= 17 && time.getHours() < 19 )
		image = images[2]
	else if ( time.getHours() >= 19 )
		image = images[3]
	
	let advices = ""
	advices += "Cambia tu ubicación con cualquiera de los comandos:\n"
	advices += "`sd.ciudad.ir(<ubicacion>)`\n`sd.ciudad.ir_a(<ubicacion>)`\n`sd.viaje(<ubicacion>)`"
	advices += "\n\nConsulta las acciones que puedes ejecutar con el comando\n`sd.acciones`"
	
	let response = new Discord.RichEmbed() 
		.setTitle("Ubicación: " + d.stats.location)//.setTitle("SimDate™ para Discord | Ciudad")
		.setAuthor(message.author.username, message.author.displayAvatarURL)
		//.setColor(0x00AE86)
		.setDescription(advices)//.setDescription("**Ubicación actual**: " + d.stats.location + "\n\n" + advices)
		//.setFooter("Fortuna", client.user.avatarURL)
		.setImage(locations.getParameter(d.stats.location, "url"))
		.setThumbnail(message.author.displayAvatarURL)
		//.setTimestamp()
		.addField("Lugares a donde ir:", "[**"+d.stats.location+"**] / "+locations.toArray().join(" | "))
	
	message.channel.send( response )
}

module.exports.set = message => {
	
	let regex1 = String.raw`sd\.ciudad\.ir(?:_a)?\((` + locations.toArray().join("|") + String.raw`)\)`
	let regex2 = String.raw`sd\.viaje\((` + locations.toArray().join("|") + String.raw`)\)`
	let location1 = message.content.match( new RegExp(regex1, "i") )
	let location2 = message.content.match( new RegExp(regex2, "i") )
	let location = location1 ? location1 : location2
	let response = ""
	
	if (location){
		
		let d = data.get(message.author.discriminator)
		if (location[1].toLowerCase() != d.stats.location.toLowerCase()) {
			
			let new_location = location[1].capitalize()
			if (d.stats.money >= 4/6) {
				let cost = rand(4,12) / 6
				d.stats.money -= cost
				d.stats.energy -= rand(0,3)
				response = "🚌 Desplazándote a ***" + new_location + "***...\nGastaste $*" + cost + "* en pasaje."
			} else {
				d.stats.energy -= rand(10,15)
				response = ":walking: Te fuiste caminando hasta *" + new_location + "*\nporque te haz quedado sin dinero para el pasaje."
			}
			if (d.stats.energy < 0) d.stats.energy = 0
			d.stats.location = new_location
			data.store(message.author.discriminator, d)
			
		} else {
			response = "Ya estás en **" + location[1] + "**, elige otra ubicación"
		}
	} else {
		response = "⚠ Esa ubicación no existe!\nRevisa la sintaxis e intenta de nuevo."
	}
	
	message.channel.send( response )
}

String.prototype.capitalize = function() {
	let str = this.toLowerCase()
	return str.charAt(0).toUpperCase() + str.slice(1)
}
