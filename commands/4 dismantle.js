const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let _items = [
	{name: "golden fish",	trade: 15,	dismantleTo: "normie fish",	icon: ":fish:"},
	{name: "epic fish",		trade: 100,	dismantleTo: "golden fish",	icon: emoji(client,"goldenfish")},
	{name: "epic log",		trade: 25,	dismantleTo: "wooden log",	icon: emoji(client,"woodenlog")},
	{name: "super log",		trade: 10,	dismantleTo: "epic log",	icon: emoji(client,"epiclog")},
	{name: "mega log",		trade: 10,	dismantleTo: "super log",	icon: emoji(client,"superlog")},
	{name: "hyper log",		trade: 10,	dismantleTo: "mega log",	icon: emoji(client,"megalog")},
	{name: "ultra log",		trade: 10,	dismantleTo: "hyper log",	icon: emoji(client,"hyperlog")},
	{name: "banana",		trade: 15,	dismantleTo: "apple",		icon: ":banana:"},
	]
	
	let items = []
	_items.forEach(item => {items.push(item.name)})
	_items.getItem = name => {return _items.filter(item=>item.name==name)[0].dismantleTo}
	_items.getIcon = name => {return _items.filter(item=>item.name==name)[0].icon}
	_items.getTrade = name => {return _items.filter(item=>item.name==name)[0].trade}
	
	if (args.length>0) {
		if (new RegExp("^("+items.join("|")+")").test(args.join(" "))){
			let matches = args.join(" ").match(String.raw`^(`+items.join("|")+String.raw`)(?:\s+(\d+|all))?`)
			let item = matches[1], quantity = /^\d+$/.test(matches[2]) ? matches[2] : matches[2]=="all" ? 15 : 1
			if (quantity < 75)
				message.channel.send( ""+(quantity*_items.getTrade(item)*0.80)+" "+_items.getIcon(item)+" `"+_items.getItem(item)+"` successfully crafted!" )
			else message.channel.send( "You don't have enough items to craft this" )
		} else {
			message.channel.send( "What are you trying to dismantle, "+message.author.toString()+"? check the name of the item again" )
			return
		}
	} else {
		message.channel.send( ""+message.author.toString()+", the correct usage of this command is `"+CONFIG_PREFIX+"dismantle [item]`, to see all recipes type `"+CONFIG_PREFIX+"recipes dismantle`!" )
	}
	// I got this msg in original, when i tried to do "dismantle banana all" without having a single banana
	//""+message.author.toString()+", the amount has to be one or higher\n"
	//+"Check the recipes with `"+CONFIG_PREFIX+"recipes`"
}

exports.help = {
	name: "dismantle",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Dismantle",
	description: "Used to dismantle your items (`recipes items`)\n**Note that you get 80% of the original recipe**",
	usage: "dismantle [item] [amount]",
	aliases: [],
	higher_tiers: "none",
}