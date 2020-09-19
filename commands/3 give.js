exports.run = async (client, message, args) => {
	message.channel.send( "Give" )
}

exports.help = {
	name: "give",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Give",
	description: "Used to give coins to another player",
	usage: "give [@player] [amount]",
	aliases: [],
	higher_tiers: "none",
}