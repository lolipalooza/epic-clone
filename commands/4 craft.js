exports.run = async (client, message, args) => {
	message.channel.send( "Craft" )
}

exports.help = {
	name: "craft",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Craft",
	description: "-",
	usage: "craft",
	aliases: [],
	higher_tiers: "none",
}