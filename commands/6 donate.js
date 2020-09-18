exports.run = async (client, message, args) => {
	message.channel.send( "Donate" )
}

exports.help = {
	name: "donate",
	category: ":gem: More rewards :gem:",
	category_order: 6,
	title: "Donate",
	description: "-",
	usage: "donate",
	aliases: [],
	higher_tiers: "none",
}