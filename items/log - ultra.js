const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "ultra log",
	title: "Ultra log",
	description: client => {
		return ""+emoji(client,"ultralog")+" Sixth tier of wooden logs, unlocked in **Area 9**\n"
			+"Obtained in `chop`, `axe`, `bowsaw`, `chainsaw` and from `lootboxes`"
	},
	value: "500,000 coins",
}