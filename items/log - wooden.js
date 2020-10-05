const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "wooden log",
	title: "Wooden log",
	description: client => {
		return ""+emoji(client,"woodenlog")+" First tier of wooden logs\n"
			+"Obtained in `chop`, `axe`, `bowsaw`, `chainsaw` and from `lootboxes`"
	},
	value: "25 coins",
}