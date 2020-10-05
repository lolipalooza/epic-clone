const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "normie fish",
	title: "Normie fish",
	description: client => {
		return ":fish: First tier of fish\n"
			+"Obtained in `fish`, `net`, `boat`, `bigboat` and from `lootboxes`"
	},
	value: "20 coins",
}