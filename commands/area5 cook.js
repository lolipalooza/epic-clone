const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "cook",
	title: "Cook",
	description: "Used to cook items to get permanent boosts, check its recipes with `recipes cook`",
	usage: "cook [item] [amount]",
	aliases: [],
	higher_tiers: "none",
	tiers: [{area:5, name:"cook"}]
}