const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setAuthor(message.author.username+"'s horse", message.author.displayAvatarURL)
	embed.addField(
		"Items", ""
		+":fish: **normie fish**: 4\n"
		+":tropical_fish: **golden fish**: 6\n"
		+""+emoji(client,"epicfish")+" **epic fish**: 6\n"
		+""+emoji(client,"woodenlog")+" **wooden log**: 383948\n"
		+""+emoji(client,"epiclog")+" **EPIC log**: 8\n"
		+""+emoji(client,"superlog")+" **SUPER log**: 8\n"
		+""+emoji(client,"megalog")+" **MEGA log**: 4\n"
		+""+emoji(client,"hyperlog")+" **HYPER log**: 1\n"
		+""+emoji(client,"ultralog")+" **ULTRA log**: 1\n"
		+":apple: **apple**: 1\n"
		+":banana: **banana**: 2\n"
		+""+emoji(client,"wolfskin")+" **wolf skin**: 4\n"
		+""+emoji(client,"zombieeye")+" **zombie eye**: 5\n"
		+""+emoji(client,"unicornhorn")+" **unicorn horn**: 13\n"
		+""+emoji(client,"mermaidhair")+" **mermaid hair**: 12\n"
		+""+emoji(client,"chip")+" **chip**: 11\n"
		+""+emoji(client,"dragonscale")+" **dragon scale**: 37\n"
		+"", true)
	embed.addField(
		"Consumables", ""
		+""+emoji(client,"lifepotion")+" **life potion**: 1095\n"
		+""+emoji(client,"cookie")+" **arena cookie**: 6176\n"
		+""+emoji(client,"edgylootbox")+" **edgy lootbox**: 1\n"
		+""+emoji(client,"cointrumpet")+" **coin trumpet**: 2\n"
		+""+emoji(client,"epicseed")+" **epic seed**: 3\n"
		+""+emoji(client,"ultrabait")+" **ultra bait**: 1\n"
		+""+emoji(client,"arenatoken")+" **arena token**: 5\n"
		+""+emoji(client,"horsetoken")+" **horse token**: 99\n"
		+"", true)
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "inventory",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Inventory",
	description: "Shows your inventory",
	usage: "inventory [@player]",
	aliases: [ 'i', 'inv' ],
	higher_tiers: "none",
}