exports.run = async (client, message, args) => {
	message.channel.send( "Dismantle" )
}

exports.help = {
	name: "dismantle",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Dismantle",
	description: "-",
	usage: "dismantle",
	aliases: [],
	higher_tiers: "none",
}