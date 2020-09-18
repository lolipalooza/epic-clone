exports.run = async (client, message, args) => {
	message.channel.send( "Quest" )
}

exports.help = {
	name: "quest",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Quest",
	description: "-",
	usage: "quest",
	aliases: []
}