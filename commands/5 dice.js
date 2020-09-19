exports.run = async (client, message, args) => {
	message.channel.send( "Dice" )
}

exports.help = {
	name: "dice",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Dice",
	description: "Used to bet your coins by throwing a dice, you get coins depending on the number\n"
		+"**1** has the worst reward (nothing) and **6** the best (+100% of your bet)\n"
		+"The legend says that a thousand years ago, a hero got a **7**...",
	usage: "dice [amount]",
	aliases: [],
	higher_tiers: "none",
}