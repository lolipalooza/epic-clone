const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "arena token",
	title: "Arena token",
	description: client => {
		return ""+emoji(client,"arenatoken")+" It is a consumable item that resets your **arena** cooldown, it is bought in the `epic shop`\n"
			+"See `help arena` for more information about this command"
	},
	value: "8 epic coins",
}