const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "golden fish",
	title: "Golden fish",
	description: client => {
		return ":tropical_fish: Second tier of fish\n"
			+"Obtained in `fish`, `net`, `boat`, `bigboat` and from `lootboxes`"
	},
	value: "200 coins",
}