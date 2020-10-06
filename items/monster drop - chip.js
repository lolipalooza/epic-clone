const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "chip",
	title: "Chip",
	description: client => {
		return ""+emoji(client,"chip")+" It is a monster drop, unlocked in **Area 9**\n"
			+"Dropped from **KILLER ROBOT** (4%), found with `hunt` — [Area 9 ~ 10]"
	},
	value: "100,000 coins",
}