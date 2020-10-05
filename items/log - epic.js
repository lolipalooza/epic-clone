const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "epic log",
	title: "Epic log",
	description: client => {
		return ""+emoji(client,"epiclog")+" Second tier of wooden logs\n"
			+"Obtained in `chop`, `axe`, `bowsaw`, `chainsaw` and from `lootboxes`"
	},
	value: "100 coins",
}