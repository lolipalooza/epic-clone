const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	if (true) {
		let embed = new Discord.RichEmbed()
		
		embed.setColor(message.guild.me.displayHexColor)
		embed.setAuthor(message.author.username+"'s lootbox", message.author.displayAvatarURL)
		embed.addField(
			""+emoji(client,"edgylootbox")+" EDGY lootbox opened!", ""
			+"+11 "+emoji(client,"epiclog")+" EPIC log\n"
			+"+6 :tropical_fish: golden fish\n"
			+"+2 :banana: banana\n"
			+"+5 "+emoji(client,"ruby")+" ruby\n"
			+"+1 "+emoji(client,"wolfskin")+" wolf skin")
		message.channel.send( {embed} )
		
	} else {
		message.channel.send( ""+message.author.toString()+", you cannot use this command if you don't have a lootbox! lootbox" )
	}
}

exports.help = {
	name: "open",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Open",
	description: "Used to open a `lootbox`\n"
		+"Lootboxes are dropped from `hunt` and `adventure`, or bought in the `shop`, more info with `lootbox`!",
	usage: "open",
	aliases: [],
	higher_tiers: "none",
}