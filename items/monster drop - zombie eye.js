const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "zombie eye",
	title: "Zombie eye",
	description: client => {
		return ""+emoji(client,"zombieeye")+" It is a monster drop, unlocked in **Area 3**\n"
			+"Dropped from **ZOMBIE** (4%), found with `hunt` — [Area 3 ~ 4]"
	},
	value: "2,000 coins",
}