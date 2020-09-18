exports.run = async (client, message, args) => {
	message.channel.send( "Recipes" )
}

exports.help = {
	name: "recipes",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Recipes",
	description: "-",
	usage: "recipes",
	aliases: [],
	higher_tiers: "none",
}