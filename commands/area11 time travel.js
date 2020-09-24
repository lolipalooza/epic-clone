const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "time travel",
	title: "Time Travel",
	description: client => {
		return "If you have unlocked area 11, you can come back to the beginning, you will get **XP** and **drop** boost (also a title)\n"
			+"Everything from your profile and inventory will be reset except your horse, coins, bank and arena cookies\n"
			+"The more time travels you do, the faster the boost will grow (+50%, +101%, +153%...)"
	},
	usage: "time travel",
	aliases: [],
	higher_tiers: "`super time travel`: Unlocked in area 15, but requires a **TIME key** to be used, but provides an extra reward",
	tiers: [
		{area:11, name:"time travel"},
		{area:15, name:"super time travel"},
	],
}