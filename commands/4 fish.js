const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Fish" )
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