const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	let player = require('../utils/data').get(message.author.discriminator)

	let items = [
		{icon:":fish:",						name:"normie fish",		type:"i"},
		{icon:":tropical_fish:",			name:"golden fish",		type:"i"},
		{icon:emoji(client,"epicfish"),		name:"epic fish",		type:"i"},
		{icon:emoji(client,"woodenlog"),	name:"wooden log",		type:"i"},
		{icon:emoji(client,"epiclog"),		name:"EPIC log",		type:"i"},
		{icon:emoji(client,"superlog"),		name:"SUPER log",		type:"i"},
		{icon:emoji(client,"megalog"),		name:"MEGA log",		type:"i"},
		{icon:emoji(client,"hyperlog"),		name:"HYPER log",		type:"i"},
		{icon:emoji(client,"ultralog"),		name:"ULTRA log",		type:"i"},
		{icon:":apple:",					name:"apple",			type:"i"},
		{icon:":banana:",					name:"banana",			type:"i"},
		{icon:emoji(client,"wolfskin"),		name:"wolf skin",		type:"i"},
		{icon:emoji(client,"zombieeye"),	name:"zombie eye",		type:"i"},
		{icon:emoji(client,"unicornhorn"),	name:"unicorn horn",	type:"i"},
		{icon:emoji(client,"mermaidhair"),	name:"mermaid hair",	type:"i"},
		{icon:emoji(client,"chip"),			name:"chip",			type:"i"},
		{icon:emoji(client,"dragonscale"),	name:"dragon scale",	type:"i"},
		{icon:emoji(client,"lifepotion"),	name:"life potion",		type:"c"},
		{icon:emoji(client,"cookie"),		name:"arena cookie",	type:"c"},
		{icon:emoji(client,"edgylootbox"),	name:"edgy lootbox",	type:"c"},
		{icon:emoji(client,"cointrumpet"),	name:"coin trumpet",	type:"c"},
		{icon:emoji(client,"epicseed"),		name:"epic seed",		type:"c"},
		{icon:emoji(client,"ultrabait"),	name:"ultra bait",		type:"c"},
		{icon:emoji(client,"arenatoken"),	name:"arena token",		type:"c"},
		{icon:emoji(client,"horsetoken"),	name:"horse token",		type:"c"},
	]

	let inventory = {i: "", c: ""}

	items.forEach(item => {
		let label = item.name.toLowerCase().replace(" ", "")
		if (player.inventory[label])
			inventory[item.type] += `${item.icon} **${item.name}**: ${player.inventory[label]}\n`
	})
	if (inventory.i=="") inventory.i = "No items\n"
	if (inventory.c=="") inventory.c = "No items\n"

	embed.setColor(message.guild.me.displayHexColor)
	embed.setAuthor(`${message.author.username}'s inventory`, message.author.displayAvatarURL)
	
	/*embed.addField(
		"Items", ""
		//+"No items\n" // inventario vacío
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
		//+"No items\n" // inventario vacío
		+""+emoji(client,"lifepotion")+" **life potion**: 1095\n"
		+""+emoji(client,"cookie")+" **arena cookie**: 6176\n"
		+""+emoji(client,"edgylootbox")+" **edgy lootbox**: 1\n"
		+""+emoji(client,"cointrumpet")+" **coin trumpet**: 2\n"
		+""+emoji(client,"epicseed")+" **epic seed**: 3\n"
		+""+emoji(client,"ultrabait")+" **ultra bait**: 1\n"
		+""+emoji(client,"arenatoken")+" **arena token**: 5\n"
		+""+emoji(client,"horsetoken")+" **horse token**: 99\n"
		+"", true)*/
	embed.addField("Items", inventory.i, true)
	embed.addField("Consumables", inventory.c, true)
	
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