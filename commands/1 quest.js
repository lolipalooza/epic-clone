const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Quest" )
}

exports.help = {
	name: "quest",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Quest",
	description: client => {
		return "Used to take a new quest, completing it is rewarded with **XP** and "+emoji(client,"coin")+" **coins** depending on your **area**\n"
				+"There are 5 types of quests: hunt, adventure, crafting, gambling and arena\n"
				+"**WARNING!** if you do not accept the quest, you cannot take another one in **1h**\n"
				+"You can quit your quest with `"+CONFIG_PREFIX+"quest quit`"
	},
	usage: "quest",
	aliases: [],
	higher_tiers: "none",
}