const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "super log",
	title: "Super log",
	description: client => {
		return ""+emoji(client,"superlog")+" Third tier of wooden logs, unlocked in **Area 2**\n"
			+"Obtained in `chop`, `axe`, `bowsaw`, `chainsaw` and from `lootboxes`"
	},
	value: "500 coins",
}