exports.run = async (client, message, args) => {
	message.channel.send( "Buy" )
}

exports.help = {
	name: "buy",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Buy",
	description: "-",
	usage: "buy",
	aliases: []
}