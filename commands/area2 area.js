const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "area",
	title: "Area",
	description: client => {
		return "Used to move to another area, usually when you are not strong enough to fight on your max area\n"
			+"If you don't know how to unlock new areas, try `"+CONFIG_PREFIX+"help dungeon`"
	},
	usage: "area [number]",
	aliases: [],
	higher_tiers: "none",
	tiers: [{area:2, name:"area"}],
}