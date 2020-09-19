exports.run = async (client, message, args) => {
	message.channel.send( "Recipes" )
}

exports.help = {
	name: "recipes",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Recipes",
	description: "Shows all the recipes, you can craft them with `craft [item]`",
	usage: "recipes [page]",
	aliases: [],
	higher_tiers: "none",
}