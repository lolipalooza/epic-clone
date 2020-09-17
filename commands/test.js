const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( emoji(client,"epiccoin")+" "+emoji(client,"edgysword") )
}

exports.help = {
	name: "test",
	category: "Debug",
	description: "-",
	usage: "test",
	aliases: []
}