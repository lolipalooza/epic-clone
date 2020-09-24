const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "mine",
	title: "Mine",
	description: client => {
		return "Used to get items required to craft swords and armors (`recipes`), unlocked in area 5\n"
			+"There is 1 type of mineral that can be obtained "+emoji(client,"ruby")+", but there is high chance to get "+emoji(client,"coin")+" coins instead"
	},
	usage: "mine",
	aliases: [],
	higher_tiers: "`pickaxe`: Unlocked in area 6, provides more items than `mine`\n"
		+"`drill`: Unlocked in area 10, provides more items than `pickaxe`\n"
		+"`dynamite`: Unlocked in area 12, provides more items than `drill`",
	tiers: [
		{area:3, name:"mine"},
		{area:4, name:"pickaxe"},
		{area:8, name:"drill"},
		{area:12, name:"dynamite"},
	],
}