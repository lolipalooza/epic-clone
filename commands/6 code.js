exports.run = async (client, message, args) => {
	message.channel.send( "Code" )
}

exports.help = {
	name: "code",
	category: ":gem: More rewards :gem:",
	category_order: 6,
	title: "Code",
	description: "-",
	usage: "code",
	aliases: []
}