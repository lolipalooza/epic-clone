const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "mermaid hair",
	title: "Mermaid hair",
	description: client => {
		return ""+emoji(client,"mermaidhair")+" It is a monster drop, unlocked in **Area 7**\n"
			+"Dropped from **MERMAID** (4%), found with `hunt` — [Area 7 ~ 8]"
	},
	value: "30,000 coins",
}