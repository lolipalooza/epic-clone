const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "life potion",
	title: "Life potion",
	description: client => {
		return ""+emoji(client,"lifepotion")+" It is a consumable item that restores your **life**\n"
			+"Bought in the `shop`, earned from `daily` and `vote` rewards"
	},
	value: "20 coins",
}