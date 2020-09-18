exports.run = async (client, message, args) => {
	message.channel.send( "Inventory" )
}

exports.help = {
	name: "inventory",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Inventory",
	description: "Shows your inventory",
	usage: "inventory [@player]",
	aliases: [ 'i', 'inv' ],
	higher_tiers: "none",
}