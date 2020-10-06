const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "epic seed",
	title: "Epic seed",
	description: client => {
		return ""+emoji(client,"epicseed")+" It is a consumable item that starts a **epic tree** event, it is bought in the `epic shop`\n"
			+"See `help epic tree` for more information about this event"
	},
	value: "12 epic coins",
}