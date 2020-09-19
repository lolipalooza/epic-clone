exports.run = async (client, message, args) => {
	message.channel.send( "Cups" )
}

exports.help = {
	name: "cups",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Cups",
	description: "Used to bet your coins\nThere are 3 cups and only one has the prize, you have to guess which one has it",
	usage: "cups [amount]",
	aliases: [],
	higher_tiers: "none",
}