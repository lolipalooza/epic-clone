const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "enchant",
	title: "Enchant",
	description: client => {
		return "Used to enchant your armor or sword, an enchant will increase your AT (on swords) or DEF (on armors)\n"
			+"The enchant you will get is **random** and will be one of the followings:\n"
			+"Normie (+5% AT/DEF)\n"
			+"Good (+15% AT/DEF)\n"
			+"Great (+25% AT/DEF)\n"
			+"Mega (+40% AT/DEF)\n"
			+"Epic (+60% AT/DEF)\n"
			+"Hyper (+70% AT/DEF)\n"
			+"Ultimate (+80% AT/DEF)\n"
			+"Perfect (+90% AT/DEF)\n"
			+"Edgy (+95% AT/DEF)\n"
			+"Ultra-Edgy (+100% AT/DEF)\n"
			+"Omega (+125% AT/DEF) [Unlocked in the 1st time travel]\n"
			+"Ultra-Omega (+150% AT/DEF) [Unlocked in the 3rd time travel]\n"
			+"Godly (+200% AT/DEF) [Unlocked in the 5th time travel]"
	},
	usage: "enchant [sword/armor]",
	aliases: [],
	higher_tiers: "`refine`: unlocked in area 7, has better chances but x10 price per enchant\n"
		+"`transmute`: unlocked in area 13, has better chances but x100 price per enchant",
	tiers: [
		{area:2, name:"enchant"},
		{area:7, name:"refine"},
		{area:13, name:"transmute"},
	],
}