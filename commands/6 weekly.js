exports.run = async (client, message, args) => {
	message.channel.send( "Weekly" )
}

exports.help = {
	name: "weekly",
	category: ":gem: More rewards :gem:",
	category_order: 6,
	title: "Weekly",
	description: "-",
	usage: "weekly",
	aliases: [],
	higher_tiers: "none",
}