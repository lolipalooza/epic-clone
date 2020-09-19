const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Lottery" )
}

exports.help = {
	name: "lottery",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Lottery",
	description: client => {
		return "You can buy up to 10 "+emoji(client,"lotteryticket")+" **lottery tickets** per draw, there's a draw every 6 hours\n"
				+"The winner is shown in the command until the next draw\n"
				+"The **pot** is updated every 15 minutes"
	},
	usage: "lottery",
	aliases: [],
	higher_tiers: "none",
}