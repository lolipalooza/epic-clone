const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	if (args.length>0) {
		let item = args.join(" ")
		if (new RegExp("life potion").test(item)) {
			let quantity = item.split("life potion").join("").trim()
			if(/^\d+$/.test(quantity) || quantity=="") {
				quantity = quantity ? quantity : 1
				message.channel.send( ""+quantity+" "+emoji(client,"lifepotion")+" `life potion` successfully bought for "+(25*quantity)+" coins" )
			} else {
				message.channel.send( "What are you trying to buy, "+message.author.toString()+"? check the name of the item again" )
			}
		} else {
			message.channel.send( "What are you trying to buy, "+message.author.toString()+"? check the name of the item again" )
		}
	} else {
		message.channel.send( ""+message.author.toString()+", the correct usage of this command is `"+CONFIG_PREFIX+"buy [item]`\n"
		+"See what you can buy with `"+CONFIG_PREFIX+"shop`" )
	}
}

exports.help = {
	name: "buy",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Buy",
	description: "Used to buy anything from the `shop`",
	usage: "buy [item] [amount]",
	aliases: [],
	higher_tiers: "none",
}