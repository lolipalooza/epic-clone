const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Epic Shop" )
}

exports.help = {
	name: "epic shop",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Epic Shop",
	description: client => {
		return "Shows the EPIC shop, you can `buy` items with "+emoji(client,"epiccoin")+" **EPIC coins**\n"
				+"Get EPIC coins with daily streaks, lootboxes, and random events triggered with commands (`help events`)\n"
				+"You can also get EPIC coins as a reward by supporting EPIC RPG --> `"+CONFIG_PREFIX+"donate`"
	},
	usage: "epic shop",
	aliases: ['epic-shop'],
	higher_tiers: "none",
}