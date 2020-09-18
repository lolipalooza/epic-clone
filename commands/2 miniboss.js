const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Miniboss" )
}

exports.help = {
	name: "miniboss",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Miniboss",
	description: client => {
		return "Used to fight a **miniboss**\n"
				+"Other people can join to increase the chance of success (max players: 10)\n"
				+"You can also start the event with other players, this will increase the reward (but uses the miniboss cooldown of everyone), everyone will have to agree\n"
				+"If you win, you get "+emoji(client,"coin")+" **coins** depending on your level, there is also a chance to level up\n"
				+"Those who helps gets a tiny amount of coins"
	},
	usage: "miniboss [@players]",
	aliases: [],
	higher_tiers: "`not so mini boss`: Unlocked in area 10, a stronger boss with better rewards!",
}