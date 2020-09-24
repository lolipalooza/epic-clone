const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "pickup",
	title: "Pickup",
	description: "Used to get items required to craft swords and armors (`recipes`), unlocked in area 3\n"
		+"There are 2 types of fruits that can be obtained :apple::banana:",
	usage: "pickup",
	aliases: [],
	higher_tiers: "`ladder`: Unlocked in area 4, provides more items than `pickup`\n"
		+"`tractor`: Unlocked in area 8, provides more items than `ladder`\n"
		+"`greenhouse`: Unlocked in area 11, provides more items than `tractor`",
	tiers: [
		{area:3, name:"pickup"},
		{area:4, name:"ladder"},
		{area:8, name:"tractor"},
		{area:11, name:"greenhouse"},
	],
}