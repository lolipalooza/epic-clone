const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Weekly" )
}

exports.help = {
	name: "weekly",
	category: ":gem: More rewards :gem:",
	category_order: 6,
	title: "Weekly",
	description: client => {
		return "Used to claim a weekly reward: "+emoji(client,"coin")+" **coins** and a "+emoji(client,"edgylootbox")+" **lootbox** depending on your **area**"
	},
	usage: "weekly",
	aliases: [],
	higher_tiers: "none",
}