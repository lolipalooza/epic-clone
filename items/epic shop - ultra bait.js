const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "ultra bait",
	title: "Ultra bait",
	description: client => {
		return ""+emoji(client,"ultrabait")+" It is a consumable item that starts a **megalodon** event, it is bought in the `epic shop`\n"
			+"See `help megalodon` for more information about this event"
	},
	value: "14 epic coins",
}