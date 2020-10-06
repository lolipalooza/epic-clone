const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.help = {
	name: "dragon scale",
	title: "Dragon scale",
	description: client => {
		return ""+emoji(client,"dragonscale")+" It is a monster drop, unlocked in **Area 11**\n"
			+"Dropped from **SCALED DRAGONS** (4%), found with `hunt` — [Area 11 ~ 14]"
	},
	value: "250,000 coins",
}