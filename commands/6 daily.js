exports.run = async (client, message, args) => {
	message.channel.send( "Daily" )
}

exports.help = {
	name: "daily",
	category: ":gem: More rewards :gem:",
	category_order: 6,
	title: "Daily",
	description: "-",
	usage: "daily",
	aliases: []
}