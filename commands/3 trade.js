const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	let id = args[0].toLowerCase()
	
	if (args.length==0 || !/^(a|b|c|d|e|f)$/.test(id)) {
		embed.setDescription("**EPIC NPC**: Hey, **"+message.author.username+"**! Are you looking to trade your items?")
		embed.addField(
			"Type `"+CONFIG_PREFIX+"trade [ID] [amount]`", ""
			+"**ID: A** ~-~ 1 :fish: ➜ 3 "+emoji(client,"woodenlog")+"\n"
			+"**ID: B** ~-~ 3 "+emoji(client,"woodenlog")+" ➜ 1 :fish:\n"
			+"**ID: C** ~-~ 1 :apple: ➜ 8 "+emoji(client,"woodenlog")+"\n"
			+"**ID: D** ~-~ 8 "+emoji(client,"woodenlog")+" ➜ 1 :apple:\n"
			+"**ID: E** ~-~ 1 "+emoji(client,"ruby")+" ➜ 350 "+emoji(client,"woodenlog")+"\n"
			+"**ID: F** ~-~ 350 "+emoji(client,"woodenlog")+" ➜ 1 "+emoji(client,"ruby")+""
			+"\n\n**[amount]** is how many times you want to do this trade")
	} else {
		let amount = args.length>1&&/^(\d+|all)$/.test(args[1]) ? args[1] : 1
		amount = amount=="all" ? 22 : amount
		let ply_icon,ply_name,npc_icon,npc_name
		
		switch(id) {
			case 'a':	ply_icon=":fish:";					npc_icon=emoji(client,"woodenlog");	ply_trade=amount; npc_trade=3*amount;		break;
			case 'b':	ply_icon=emoji(client,"woodenlog");	npc_icon=":fish:";					ply_trade=3*amount; npc_trade=amount;		break;
			case 'c':	ply_icon=":apple:";					npc_icon=emoji(client,"woodenlog");	ply_trade=amount; npc_trade=8*amount;		break;
			case 'd':	ply_icon=emoji(client,"woodenlog");	npc_icon=":apple:";					ply_trade=8*amount; npc_trade=amount;		break;
			case 'e':	ply_icon=emoji(client,"ruby");		npc_icon=emoji(client,"woodenlog");	ply_trade=amount; npc_trade=350*amount;		break;
			case 'f':	ply_icon=emoji(client,"woodenlog");	npc_icon=emoji(client,"ruby");		ply_trade=350*amount; npc_trade=amount;		break;
		}
		
		embed.setDescription("**EPIC NPC**: Alright! Our trade is done then")
		embed.addField(
			"Traded items", ""
			+"**"+message.author.username+"**: "+ply_icon+" x"+ply_trade+"\n"
			+"**EPIC NPC**: "+npc_icon+" x"+npc_trade+"")
	}
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "trade",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Trade",
	description: "Used to trade with the **EPIC NPC**",
	usage: "trade [ID] [amount]",
	aliases: [],
	higher_tiers: "none",
}