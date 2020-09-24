const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "time travel",
	title: "Time Travel",
	description: client => {
		return "Comando para probar weas y debuggear el bot qliao."
				+"\n\nMira que bonitos mis emojis "
				+emoji(client,"epiccoin")+" "+emoji(client,"edgysword")+" "+emoji(client,"ancientdragon")
				+", los saqué de 3 servers diferentes. Inteligente no? "+emoji(client,"edgysword")
	},
	usage: "time travel",
	aliases: [],
	higher_tiers: "none",
	tiers: [
		{area:11, name:"time travel"},
		{area:15, name:"super time travel"},
	],
}