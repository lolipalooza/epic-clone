exports.run = async (client, message, args) => {
	message.channel.send( "Horse" )
}

exports.help = {
	name: "horse",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Horse",
	description: "-",
	usage: "horse",
	aliases: []
}