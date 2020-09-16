const Discord = require('discord.js')
const fs = require('fs')
const rand = require('../functions/utils').rand

exports.run = async (client, message, args) => {
	let fortunas = JSON.parse( fs.readFileSync('./data.json') ).fortunas
	
	let fortuna
	
	do {
		fortuna = fortunas[ rand(0, fortunas.length-1) ]
	} while( fortuna.startsWith("//") )
	
	fortuna = fortuna.match('`') ? eval(fortuna) : fortuna
	
	let richEmbed = new Discord.RichEmbed() 
		.setTitle("Tu Fortuna:")
		.setAuthor(message.author.username, message.author.displayAvatarURL)
		//.setColor(0x00AE86)
		.setDescription( '"' + fortuna + '"' )
		//.setFooter("Fortuna", client.user.avatarURL)
		//.setImage(message.author.displayAvatarURL)
		.setThumbnail("https://www.fifteenspatulas.com/wp-content/uploads/2014/01/Fortune-Cookie-Recipe-Fifteen-Spatulas-2-500x427.jpg")
		//.setTimestamp()
		//.setURL("https://github.com/lolipalooza")
		//.addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
		//.addField("Campo en línea", "Debajo del campo en línea",  true)
		//.addBlankField(true)
		//.addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true)
	
	message.channel.send(richEmbed)
}

exports.help = {
	name: "fortuna",
	category: "Randurr",
	description: "Consulta tu fortuna y averigua qué te depara el futuro...",
	usage: "fortuna",
	aliases: []
}