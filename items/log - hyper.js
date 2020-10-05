const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "hyper log",
	title: "Hyper log",
	description: client => {
		return ""+emoji(client,"hyperlog")+" Fifth tier of wooden logs, unlocked in **Area 6**\n"
			+"Obtained in `chop`, `axe`, `bowsaw`, `chainsaw` and from `lootboxes`"
	},
	value: "50,000 coins",
}