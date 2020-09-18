exports.run = async (client, message, args) => {
	message.channel.send( "Buy" )
}

exports.help = {
	name: "buy",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Buy",
	description: "Used to buy anything from the `shop`",
	usage: "buy [item] [amount]",
	aliases: [],
	higher_tiers: "none",
}