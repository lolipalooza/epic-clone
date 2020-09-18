const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Arena" )
}

exports.help = {
	name: "arena",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Arena",
	description: client => {
		return "Starts an arena event, other players can join (max players: 10)\n"
				+"You can also start the event with other players, this will increase the reward (but uses the arena cooldown of everyone), everyone will have to agree\n"
				+emoji(client,"cookie")+" arena cookies are given per kill\n"
				+"The more players join, the bigger the prizes! **the chance to kill is the same for everyone!**\n"
				+"Then, you can eat your cookies with `eat`"
	},
	usage: "arena [@players]",
	aliases: [],
	higher_tiers: "`big arena`: Unlocked in area 7, a harder arena with better rewards!",
}