const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "horse token",
	title: "Horse token",
	description: client => {
		return ""+emoji(client,"horsetoken")+" It is a consumable item that keeps the type of your horse after a horse breeding, it is bought in the `epic shop`\n"
			+"See `help horse` for more information about horses"
	},
	value: "4 epic coins",
}