exports.run = async (client, message, args) => {
	message.channel.send( "Use" )
}

exports.help = {
	name: "use",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Use",
	description: "-",
	usage: "use",
	aliases: []
}