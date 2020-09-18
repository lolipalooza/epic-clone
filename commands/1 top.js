exports.run = async (client, message, args) => {
	message.channel.send( "Top" )
}

exports.help = {
	name: "top",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Top",
	description: "-",
	usage: "top",
	aliases: []
}