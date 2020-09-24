const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "mine",
	title: "Mine",
	description: client => {
		return "Comando para probar weas y debuggear el bot qliao."
				+"\n\nMira que bonitos mis emojis "
				+emoji(client,"epiccoin")+" "+emoji(client,"edgysword")+" "+emoji(client,"ancientdragon")
				+", los saqué de 3 servers diferentes. Inteligente no? "+emoji(client,"edgysword")
	},
	usage: "mine",
	aliases: [],
	higher_tiers: "none",
	tiers: [
		{area:3, name:"mine"},
		{area:4, name:"pickaxe"},
		{area:8, name:"drill"},
		{area:12, name:"dynamite"},
	],
}