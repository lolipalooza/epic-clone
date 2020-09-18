exports.run = async (client, message, args) => {
	message.channel.send( "Inventory" )
}

exports.help = {
	name: "inventory",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Inventory",
	description: "-",
	usage: "inventory",
	aliases: [ 'i', 'inv' ]
}