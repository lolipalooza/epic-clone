const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "coin",
	title: "Coin",
	description: client => {
		return ""+emoji(client,"coin")+" The main currency in the game\n"
			+"Obtained with fighting, economy and gambling commands"
	},
	value: "Well 1 coin i guess",
}