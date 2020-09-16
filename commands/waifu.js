const Discord = require('discord.js')
const fs = require('fs')
const rand = require('../functions/utils').rand

exports.run = async (client, message, args) => {
	
	let waifus = JSON.parse( fs.readFileSync('./data.json') ).waifus
	let id, name, url, wclass
	
	do {
		id = rand(0, waifus.options.length-1)
		name = waifus.options[ id ].name
		url = waifus.options[ id ].url
		wclass = waifus.options[ id ].class
	} while ( name.startsWith("//") )
		
	let text, tclass
	
	do {
		id = rand(0, waifus.texts.length-1)
		text = waifus.texts[ id ].msg
		tclass = waifus.texts[ id ].class
		var cond = tclass == "*" || tclass.split(" ").includes(wclass)
	} while ( ! cond )
	
	text = text.replace("%s", '***'+name+'***')
	
	let richEmbed = new Discord.RichEmbed() 
		.setTitle("Asignador de waifus:")
		.setAuthor(message.author.username, message.author.displayAvatarURL)
		//.setColor(0x00AE86)
		.setDescription( '"' + text + '"' )
		//.setFooter("Fortuna", client.user.avatarURL)
		.setImage(url)
		.setThumbnail(message.author.displayAvatarURL)
		//.setTimestamp()
		//.setURL("https://github.com/lolipalooza")
		//.addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
		//.addField("Campo en línea", "Debajo del campo en línea",  true)
		//.addBlankField(true)
		//.addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true)
	
	message.channel.send(richEmbed)
}

exports.help = {
	name: "waifu",
	category: "Randurr",
	description: "Consúltame para saber qué waifu tenemos asignada para tí.",
	usage: "waifu",
	aliases: []
}