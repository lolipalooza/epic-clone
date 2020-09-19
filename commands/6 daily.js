const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Daily" )
}

exports.help = {
	name: "daily",
	category: ":gem: More rewards :gem:",
	category_order: 6,
	title: "Daily",
	description: client => {
		return "Used to claim a daily reward: "+emoji(client,"coin")+" **coins** and "+emoji(client,"lifepotion")+" **life potions** depending on your **area**"
	},
	usage: "daily",
	aliases: [],
	higher_tiers: "none",
}