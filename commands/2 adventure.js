const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Adventure" )
}

exports.help = {
	name: "adventure",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Adventure",
	description: client => {
		return "Used to find a STRONG enemy, if you kill it you get **XP** and "+emoji(client,"coin")+" **coins** depending on your **area**, but you will lose some HP.\n"
				+"If you die, you will lose one level: keep an eye on your HP and use "+emoji(client,"lifepotion")+" **life potions** to restore it!\n"
	},
	usage: "adventure",
	aliases: [ 'adv' ],
	higher_tiers: "`adventure hardmode`: unlocked in area 14, it has the same enemies but they are stronger and gives better rewards",
}