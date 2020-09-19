const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Vote" )
}

exports.help = {
	name: "vote",
	category: ":gem: More rewards :gem:",
	category_order: 6,
	title: "Vote",
	description: client => {
		return "You can vote for **EPIC RPG** every 12 hours\n"
				+"__Rewards__:\n"
				+""+emoji(client,"coin")+" **Coins** depending on your level\n"
				+""+emoji(client,"lifepotion")+" **Life** potions depending on your level\n"
				+":dagger: **Adventure cooldown reset**\n"
				+":crossed_swords: **Dungeon/Miniboss cooldown reset** - Only on fridays, saturdays and sundays (UTC)"
	},
	usage: "vote",
	aliases: [],
	higher_tiers: "none",
}