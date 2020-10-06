const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "unicorn horn",
	title: "Unicorn horn",
	description: client => {
		return ""+emoji(client,"unicornhorn")+" It is a monster drop, unlocked in **Area 5**\n"
			+"Dropped from **UNICORN** (4%), found with `hunt` — [Area 5 ~ 6]"
	},
	value: "7,500 coins",
}