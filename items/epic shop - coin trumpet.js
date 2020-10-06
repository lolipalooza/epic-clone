const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "coin trumpet",
	title: "Coin trumpet",
	description: client => {
		return ""+emoji(client,"cointrumpet")+" It is a consumable item that starts a **coin rain** event, it is bought in the `epic shop`\n"
			+"See `help coin rain` for more information about this event"
	},
	value: "6 epic coins",
}