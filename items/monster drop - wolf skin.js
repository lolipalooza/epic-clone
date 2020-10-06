const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "wolf skin",
	title: "Wolf skin",
	description: client => {
		return ""+emoji(client,"wolfskin")+" It is a monster drop\n"
			+"Dropped from **WOLF** (4%), found with `hunt` — [Area 1 ~ 2]"
	},
	value: "500 coins",
}