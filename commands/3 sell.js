exports.run = async (client, message, args) => {
	message.channel.send( "Sell" )
}

exports.help = {
	name: "sell",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Sell",
	description: "Used to sell an item",
	usage: "sell [item] [amount]",
	aliases: [],
	higher_tiers: "none",
}