const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	if (args.length>0) {
		let item = args.join(" ")
		if (new RegExp("life potion").test(item)) {
			let quantity = item.split("life potion").join("").trim()
			if(/^\d+$/.test(quantity) || quantity=="") {
				quantity = quantity ? quantity : 1
				message.channel.send( ""+quantity+" "+emoji(client,"lifepotion")+" `life potion` successfully sold for "+(20*quantity)+" coins" )
			} else {
				message.channel.send( ""+message.author.toString()+", what are you doing??\n"
					+"Correct usage: `"+CONFIG_PREFIX+"sell [item] [amount]`" )
			}
			// TODO: case when quantity is "all"
		} else {
			message.channel.send( ""+message.author.toString()+", what are you trying to sell?? check its name again\n"
				+"Correct usage: `"+CONFIG_PREFIX+"sell [item]`" )
		}
	} else {
		message.channel.send( ""+message.author.toString()+", the correct usage of this command is `"+CONFIG_PREFIX+"sell [item]`" )
	}
}

exports.help = {
	name: "sell",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Sell",
	description: "Used to sell an item",
	usage: "sell [item] [amount]",
	aliases: [],
	higher_tiers: "none",
}