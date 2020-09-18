exports.run = async (client, message, args) => {
	message.channel.send( "Cups" )
}

exports.help = {
	name: "cups",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Cups",
	description: "-",
	usage: "cups",
	aliases: [],
	higher_tiers: "none",
}