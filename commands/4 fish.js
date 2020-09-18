exports.run = async (client, message, args) => {
	message.channel.send( "Fish" )
}

exports.help = {
	name: "fish",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Fish",
	description: "-",
	usage: "fish",
	aliases: []
}