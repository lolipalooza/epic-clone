const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	message.channel.send( "Heal" )
}

exports.help = {
	name: "heal",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Heal",
	description: client => {
		return "Used to restore your life, requires a "+emoji(client,"lifepotion")+" life potion (`shop`)"
	},
	usage: "heal",
	aliases: [],
	higher_tiers: "none",
}