exports.run = async (client, message, args) => {
	message.channel.send( "Coinflip" )
}

exports.help = {
	name: "coinflip",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Coinflip",
	description: "Used to bet your coins by flipping a coin",
	usage: "coinflip [h/t] [amount]",
	aliases: [ 'cf' ],
	higher_tiers: "none",
}