const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
		let embed = new Discord.RichEmbed()
		
		embed.setColor(message.guild.me.displayHexColor)
		embed.setDescription("**Buy anything with** `"+CONFIG_PREFIX+"buy [item]`")
		
		if (args.length==0 || args.length>0 && args[0]!="2")
			embed.addField(
				"Shop - Page 1/2", ""
				+""+emoji(client,"lifepotion")+" `life potion` - Restore your life with `heal` | **25** "+emoji(client,"coin")+"\n"
				+""+emoji(client,"basicarmor")+" `basic armor` - **[+2 def]** An ugly armor made of wood | **200** "+emoji(client,"coin")+"\n"
				+""+emoji(client,"basicsword")+" `basic sword` - **[+1 at]** Better than nothing huh? | **150** "+emoji(client,"coin")+"\n"
				+""+emoji(client,"tier1")+" `basic horse` - **[tier I]** Just a normie horse | **500** "+emoji(client,"coin")+"\n"
				+""+emoji(client,"dungeonkey")+" `dungeon key` - You need this key to enter the dungeon | **50,000,000** "+emoji(client,"coin")+"\n"
				+""+emoji(client,"lotteryticket")+" `lottery ticket` - to join the `lottery` | **5,000** "+emoji(client,"coin")+"")
		else if (args.length>0 && args[0]=="2") {
			embed.addField(
				"Shop - Page 2/2", ""
				+""+emoji(client,"commonlootbox")+" `common lootbox` - Open it with `open` | **1,000** "+emoji(client,"coin")+"\n"
				+""+emoji(client,"uncommonlootbox")+" `uncommon lootbox` - Open it with `open` | **7,500** "+emoji(client,"coin")+"\n"
				+""+emoji(client,"rarelootbox")+" `rare lootbox` - Open it with `open` | **50,000** "+emoji(client,"coin")+"\n"
				+""+emoji(client,"epiclootbox")+" `EPIC lootbox` - Open it with `open` | **200,000** "+emoji(client,"coin")+"\n"
				+""+emoji(client,"edgylootbox")+" `EDGY lootbox` - Open it with `open` | **420,666** "+emoji(client,"coin")+"\n"
				+":sparkles: life boost A - **[+10 life]** temporary and not stackable | **10,000** "+emoji(client,"coin")+"\n"
				+":sparkles: life boost B - **[+25 life]** temporary and not stackable | **100,000** "+emoji(client,"coin")+"\n"
				+":sparkles: life boost C - **[+50 life]** temporary and not stackable | **1,000,000** "+emoji(client,"coin")+""
				+"\n\n**Type `"+CONFIG_PREFIX+"lootbox` for detailed information about lootboxes**")
		}
		
		message.channel.send( {embed} )
}

exports.help = {
	name: "shop",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Shop",
	description: "Shows the shop, buy anything from it with `buy`",
	usage: "shop [page]",
	aliases: [],
	higher_tiers: "none",
}