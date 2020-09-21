const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let _items = [
	{name: "golden fish",	icon: ":tropical_fish:"},
	{name: "epic fish",		icon: emoji(client,"epicfish")},
	{name: "epic log",		icon: emoji(client,"epiclog")},
	{name: "super log",		icon: emoji(client,"superlog")},
	{name: "mega log",		icon: emoji(client,"megalog")},
	{name: "hyper log",		icon: emoji(client,"hyperlog")},
	{name: "ultra log",		icon: emoji(client,"ultralog")},
	{name: "banana",		icon: ":banana:"},
	]
	
	let items = []
	_items.forEach(item => {items.push(item.name)})
	_items.getIcon = name => {return _items.filter(item=>item.name==name)[0].icon}
	
	if (args.length>0) {
		if (new RegExp("^("+items.join("|")+")").test(args.join(" "))){
			let matches = args.join(" ").match(String.raw`^(`+items.join("|")+String.raw`)(?:\s+(\d+|all))?`)
			let item = matches[1], quantity = /^\d+$/.test(matches[2]) ? matches[2] : matches[2]=="all" ? 15 : 1
			if (quantity < 250)
				message.channel.send( ""+quantity+" "+_items.getIcon(item)+" `"+item+"` successfully crafted!" )
			else message.channel.send( "You don't have enough items to craft this" )
		} else {
			message.channel.send( "What are you trying to craft, "+message.author.toString()+"? check the name of the item again" )
			return
		}
	} else {
		message.channel.send( ""+message.author.toString()+", the correct usage of this command is `"+CONFIG_PREFIX+"craft [item]`\n"
			+"See all recipes with `"+CONFIG_PREFIX+"recipes`" )
	}
}

exports.help = {
	name: "craft",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Craft",
	description: "Used to craft swords, armors and items from `recipes`\n"
		+"**Note that you cannot carry more than one sword and one armor at once, so you have to sell your current one to craft another**",
	usage: "craft [item] [amount]",
	aliases: [],
	higher_tiers: "`forge`: Unlocked in area 11, used to upgrade swords and armors",
}