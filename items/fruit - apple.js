const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "apple",
	title: "Apple",
	description: client => {
		return ":apple: First tier of fruit, unlocked in **Area 3**\n"
			+"Obtained in `pickup`, `ladder`, `tractor`, `greenhouse` and from `lootboxes`"
	},
	value: "2,000 coins",
}