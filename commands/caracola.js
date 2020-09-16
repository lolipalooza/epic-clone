const Discord = require('discord.js')
const rand = require('../functions/utils').rand

exports.run = async (client, message, args) => {
	let text
	if (args.length==0)
		text = "¿¡Y la puta pregunta ijode puta?!"
	else if (args.length==1)
		text = "Esa pregunta no la entiendo..."
	
	let caracola_msg = [
		"Cy.", "Ño.", "Puede ser.", "Pregunta otra vez.", "No puedo responder ahora.",
		"Si tu quieres.", "¿A quién le importa? ¡Fapéate!", "Eres puto.", "Mátate pendeja!", "No se."
	][rand(0,9)]
	
	let response = '"' + (text?text:caracola_msg) + '"'
	
	let richEmbed = new Discord.RichEmbed()
		.setTitle("Caracola Mágica:")
		.setAuthor("Caracola", "https://images-na.ssl-images-amazon.com/images/I/91YDA4kSb-L.png")
		.setColor(0x00AE86)
		.setDescription( response )
		//.setFooter("Fortuna", client.user.avatarURL)
		//.setImage("https://images-na.ssl-images-amazon.com/images/I/91YDA4kSb-L.png")
		.setThumbnail("https://images-na.ssl-images-amazon.com/images/I/91YDA4kSb-L.png")
		//.setTimestamp()
		//.setURL("")
		//.addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
		//.addField("Campo en línea", "Debajo del campo en línea",  true)
		//.addBlankField(true)
		//.addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true)
	
	message.channel.send(richEmbed)
}

exports.help = {
	name: "caracola",
	category: "Randurr",
	description: "Hazle una pregunta a la cara de cola, a ver qué te dice jeje...",
	usage: "caracola <pregunta tipo cy/ño>",
	aliases: []
}