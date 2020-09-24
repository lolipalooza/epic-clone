const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "wheel",
	title: "Wheel",
	description: "Used to bet your coins in a wheel, each color has a different reward",
	usage: "wheel [amount]",
	aliases: [],
	higher_tiers: "none",
	tiers: [{area:8, name:"wheel"}]
}