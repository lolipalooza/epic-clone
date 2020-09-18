exports.run = async (client, message, args) => {
	message.channel.send( "Epic Shop" )
}

exports.help = {
	name: "epic shop",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Epic Shop",
	description: "-",
	usage: "epic shop",
	aliases: []
}