const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Hunt" )
}

exports.help = {
	name: "hunt",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Hunt",
	description: client => {
		return "Used to find an enemy, if you kill it you get **XP** and "+emoji(client,"coin")+" **coins** depending on your **area**, but you will lose some HP.\n"
				+"There's also a chance of getting an item from some enemies\n"
				+"If you die, you will lose one level: keep an eye on your HP and use "+emoji(client,"lifepotion")+" **life potions** to restore it!"
	},
	usage: "hunt",
	aliases: [],
	higher_tiers: "`hunt together`: unlocked while married, both players will hunt together and there is no chance to die (both cooldown required)\n"
		+"`hunt alone`: unlocked in level 50, your horse will not help you and the enemies are way stronger\n"
		+"`hunt hardmode`: unlocked in area 13, it has the same enemies but they are stronger and gives better rewards\n",
}