exports.run = async (client, message, args) => {
	message.channel.send( "Shop" )
}

exports.help = {
	name: "shop",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Shop",
	description: "-",
	usage: "shop",
	aliases: []
}