const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "mega log",
	title: "Mega log",
	description: client => {
		return ""+emoji(client,"megalog")+" Fourth tier of wooden logs, unlocked in **Area 4**\n"
			+"Obtained in `chop`, `axe`, `bowsaw`, `chainsaw` and from `lootboxes`"
	},
	value: "5,000 coins",
}