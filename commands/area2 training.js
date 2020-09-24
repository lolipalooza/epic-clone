const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "training",
	title: "Training",
	description: client => {
		return "Starts a simple minigame, if you succeed you get **XP** depending on your **area**"
	},
	usage: "training",
	aliases: ['tr'],
	higher_tiers: "none",
}