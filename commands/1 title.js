exports.run = async (client, message, args) => {
	message.channel.send( "Title" )
}

exports.help = {
	name: "title",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Title",
	description: "Used to choose a title, see all titles with `"+CONFIG_PREFIX+"title`",
	usage: "title [ID]",
	aliases: [],
	higher_tiers: "none",
}