exports.run = async (client, message, args) => {
	message.channel.send( "Use" )
}

exports.help = {
	name: "use",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Use",
	description: "Used to use a consumable item from your inventory (life potion can alo be used by `heal`)",
	usage: "use [item]",
	aliases: [],
	higher_tiers: "none",
}