exports.run = async (client, message, args) => {
	message.channel.send( "Shop" )
}

exports.help = {
	name: "shop",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Shop",
	description: "Shows the shop, buy anything from it with `buy`",
	usage: "shop [page]",
	aliases: [],
	higher_tiers: "none",
}