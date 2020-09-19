exports.run = async (client, message, args) => {
	message.channel.send( "Slots" )
}

exports.help = {
	name: "slots",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Slots",
	description: "Used to bet your coins in a slot machine, you win if you get at least 3 slots of the same type",
	usage: "slots [amount]",
	aliases: [],
	higher_tiers: "none",
}