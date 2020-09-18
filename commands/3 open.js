exports.run = async (client, message, args) => {
	message.channel.send( "Open" )
}

exports.help = {
	name: "open",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Open",
	description: "-",
	usage: "open",
	aliases: []
}