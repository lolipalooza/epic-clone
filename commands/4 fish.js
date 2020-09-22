const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji
const rand = require('../functions/utils.js').rand

exports.run = async (client, message, args) => {
	let amount = rand(1,3)
	let tier = rand(1,100)
	
	if (tier>99)
		message.channel.send( "**WOOOAAAA!! "+message.author.username+"** got "+1+" "+emoji(client,"epicfish")+" **EPIC** fish" )
	else if (tier>80)
		message.channel.send( "**"+message.author.username+"** got "+amount+" :tropical_fish: golden fish" )
	else
		message.channel.send( "**"+message.author.username+"** got "+amount+" :fish: normie fish" )
}

exports.help = {
	name: "fish",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Fish",
	description: client => {
		return "Used to get items required to craft swords and armors (`recipes`)\n"
				+"There are 3 types of fish that can be obtained :fish::tropical_fish:"+emoji(client,"epicfish")+"\n"
				+"One of them is unlocked in higher **areas**, use `"+CONFIG_PREFIX+"start` if you don't know how to unlock them"
	},
	usage: "fish",
	aliases: [],
	higher_tiers: "`net`: Unlocked in area 3, provides more items than `fish`\n"
		+"`boat`: Unlocked in area 6, provides more items than `net`\n"
		+"`bigboat`: Unlocked in area 9, provides more items than `boat`",
}