const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "epic coin",
	title: "Epic coin",
	description: client => {
		return ""+emoji(client,"epiccoin")+" The EPIC currency\n"
			+"Obtained with `daily`, `vote`, lootboxes, events, and supporting the bot (`donate`)"
	},
	value: "Not sellable",
}