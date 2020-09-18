exports.run = async (client, message, args) => {
	message.channel.send( "Lootbox" )
}

exports.help = {
	name: "lootbox",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Lootbox",
	description: "-",
	usage: "lootbox",
	aliases: []
}