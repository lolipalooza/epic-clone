const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "pets",
	title: "Pets",
	description: client => {
		return "Comando para probar weas y debuggear el bot qliao."
				+"\n\nMira que bonitos mis emojis "
				+emoji(client,"epiccoin")+" "+emoji(client,"edgysword")+" "+emoji(client,"ancientdragon")
				+", los saqué de 3 servers diferentes. Inteligente no? "+emoji(client,"edgysword")
	},
	usage: "pets",
	aliases: ['pet'],
	higher_tiers: "none",
	tiers: [{area:12, name:"time travel"}],
}