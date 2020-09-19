exports.run = async (client, message, args) => {
	message.channel.send( "Dismantle" )
}

exports.help = {
	name: "dismantle",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Dismantle",
	description: "Used to dismantle your items (`recipes items`)\n**Note that you get 80% of the original recipe**",
	usage: "dismantle [item] [amount]",
	aliases: [],
	higher_tiers: "none",
}