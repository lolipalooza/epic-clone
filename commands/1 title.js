exports.run = async (client, message, args) => {
	message.channel.send( "Title" )
}

exports.help = {
	name: "title",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Title",
	description: "-",
	usage: "title",
	aliases: []
}