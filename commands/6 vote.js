exports.run = async (client, message, args) => {
	message.channel.send( "Vote" )
}

exports.help = {
	name: "vote",
	category: ":gem: More rewards :gem:",
	category_order: 6,
	title: "Vote",
	description: "-",
	usage: "vote",
	aliases: [],
	higher_tiers: "none",
}