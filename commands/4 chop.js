exports.run = async (client, message, args) => {
	message.channel.send( "Chop" )
}

exports.help = {
	name: "chop",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Chop",
	description: "-",
	usage: "chop",
	aliases: []
}