exports.run = async (client, message, args) => {
	message.channel.send( "Trade" )
}

exports.help = {
	name: "trade",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Trade",
	description: "Used to trade with the **EPIC NPC**",
	usage: "trade [ID] [amount]",
	aliases: [],
	higher_tiers: "none",
}