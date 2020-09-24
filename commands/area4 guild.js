const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "guild",
	title: "Guild",
	description: "Shows your guild",
	usage: "guild [@player]",
	aliases: [],
	higher_tiers: "none",
	tiers: [{area:4, name:"guild"}],
}