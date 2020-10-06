const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "ruby",
	title: "Ruby",
	description: client => {
		return ""+emoji(client,"ruby")+" First tier of mineral, unlocked in **Area 5**\n"
			+"Obtained in `mine`, `pickaxe`, `drill`, `dynamite` and from `lootboxes`"
	},
	value: "50,000 coins",
}