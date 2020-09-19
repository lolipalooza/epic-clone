const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Chop" )
}

exports.help = {
	name: "chop",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Chop",
	description: client => {
		return "Used to get items required to craft swords and armors (`recipes`)\n"
				+"There are 6 types of wooden logs that can be obtained "+emoji(client,"woodenlog")+emoji(client,"epiclog")+emoji(client,"superlog")+emoji(client,"megalog")+emoji(client,"hyperlog")+emoji(client,"ultralog")+"\n"
				+"Some of them are unlocked in higher **areas**, use `"+CONFIG_PREFIX+"start` if you don't know how to unlock them\n"
				+"You can quit your quest with `"+CONFIG_PREFIX+"quest quit`"
	},
	usage: "chop",
	aliases: [],
	higher_tiers: "`axe`: Unlocked in area 3, provides more items than `chop`"
		+"`bowsaw`: Unlocked in area 6, provides more items than `axe`"
		+"`chainsaw`: Unlocked in area 9, provides more items than `bowsaw`",
}