const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Emojis: "+emoji(client,"epiccoin")+" "+emoji(client,"edgysword") )
}

exports.help = {
	name: "coin",
	title: "Coin",
	description: client => {
		return ""+emoji(client,"coin")+" The main currency in the game\n"
			+"Obtained with fighting, economy and gambling commands"
	},
	value: "Well 1 coin i guess",
}