const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "epic fish",
	title: "Epic fish",
	description: client => {
		return ""+emoji(client,"epicfish")+" Third tier of fish, unlocked in **Area 2**\n"
			+"Obtained in `fish`, `net`, `boat`, `bigboat` and from `lootboxes`"
	},
	value: "75,000 coins",
}