exports.run = async (client, message, args) => {
	message.channel.send( "Give" )
}

exports.help = {
	name: "give",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Give",
	description: "-",
	usage: "give",
	aliases: [],
	higher_tiers: "none",
}