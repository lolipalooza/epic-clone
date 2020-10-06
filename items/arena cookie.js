const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "arena cookie",
	title: "Arena cookie",
	description: client => {
		return ""+emoji(client,"cookie")+" It is a consumable item that provides **XP** depending on level\n"
			+"Earned in `arena`\n"
	},
	value: "1,000 coins",
}