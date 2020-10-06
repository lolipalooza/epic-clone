const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "banana",
	title: "Banana",
	description: client => {
		return ":banana: Second tier of fruit, unlocked in **Area 3**\n"
			+"Obtained in `pickup`, `ladder`, `tractor`, `greenhouse` and from `lootboxes`"
	},
	value: "10,000 coins",
}