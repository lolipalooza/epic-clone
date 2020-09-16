const Discord = require('discord.js')
const data = require('../utils/data')

module.exports = message => {
	
	let d = data.get(message.author.discriminator)
	let response = ""
	
	if (!d) {
		
		response += "No tienes ningun dato salvado en ***SimDate™ para Discord***\n"
		response += "Usa el comando `sd.iniciar` para iniciar una nueva partida."
		
	} else {
		
		response = new Discord.RichEmbed() 
			.setTitle("SimDate™ para Discord | Estado")
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			//.setColor(0x00AE86)
			.setDescription("🏬 Ubicación: **" + d.stats.location + "**")
			//.setFooter("Fortuna", client.user.avatarURL)
			//.setImage(message.author.displayAvatarURL)
			.setThumbnail(message.author.displayAvatarURL)
			//.setTimestamp()
			.addField("Estados", "💤 Energía: " + d.stats.energy + "/" + d.stats.max_energy + " | 💸 Dinero: $" + d.stats.money)
			.addField("Estados", "💖 Carisma: " + d.stats.charm + " | 💪 Fuerza: " + d.stats.strength + " | 🎓 Inteligencia: " + d.stats.intelligence)
	}
	
	message.channel.send( response )
}