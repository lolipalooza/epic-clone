const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	if (args.length>0) {
		let user_id, quantity
		if (/^<@!?\d+>$/.test(args[0]) && /^\d+(k|m)?$/.test(args[1])){
			user_id = args[0].match(/^<@!?(\d+)>$/)[1]
			quantity = args[1]
		} else if (/^<@!?\d+>$/.test(args[1]) && /^\d+(k|m)?$/.test(args[0])) {
			user_id = args[1].match(/^<@!?(\d+)>$/)[1]
			quantity = args[0]
		} else {
			message.channel.send( ""+message.author.toString()+", what are you doing??\n"
				+"Correct usage: `"+CONFIG_PREFIX+"give [@player] [coins]`" )
			return
		}
		let user = client.users.get(user_id)
		quantity = quantity.replace('k','000').replace('m','000000')
		message.channel.send( "**"+message.author.username+"** gave **"+user.username+"** "+quantity+" coins" )
		//message.channel.send( ""+message.author.toString()+", you cannot use `give` with players that have not time traveled at least 2 times anymore" )
	} else {
		message.channel.send( "Huh, next time be sure to say who you want to give your coins\n"
			+"Correct usage: `"+CONFIG_PREFIX+"give [@player] [coins]`" )
	}
}

exports.help = {
	name: "give",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Give",
	description: "Used to give coins to another player",
	usage: "give [@player] [amount]",
	aliases: [],
	higher_tiers: "none",
}