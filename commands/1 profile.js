const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setAuthor(message.author.username+"'s profile", message.author.displayAvatarURL)
	embed.setThumbnail(message.author.displayAvatarURL)
	embed.setDescription("**DRAGON SLAYER**")
	embed.addField(
		"PROGRESS", ""
		+"**Level**: 78 (76.04%)\n"
		+"**XP**: 578,325/760,500\n"
		+"**Area**: 12 (Max: 12)")
	embed.addField(
		"STATS", ""
		+":dagger: **AT**: 718\n"
		+":shield: **DEF**: 718\n"
		+":heart: **LIFE**: 458/490")
	embed.addField(
		"EQUIPMENT", ""
		+""+emoji(client,"ultraedgysword")+" [Perfect]\n"
		+""+emoji(client,"ultraedgyarmor")+" [Perfect]\n"
		+""+emoji(client,"tier8")+" [SPECIAL]", true)
	embed.addField(
		"MONEY", ""
		+""+emoji(client,"coin")+" **Coins**: 2,458,321\n"
		+""+emoji(client,"epiccoin")+" **EPIC coins**: 688\n"
		+""+emoji(client,"epicrpgbank")+" **Bank**: 520,000,000", true)
	embed.setFooter("RANK: -1", client.user.avatarURL)
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "profile",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Profile",
	description: "Shows your profile\n"
		+ "Profiles can have backgrounds which can be obtained in `epic shop` and during special events\n"
		+ "The **RANK** displayed in this command depends on time travels, area and level. This **RANK** is updated every hour",
	usage: "profile [@player]",
	aliases: [ 'p' ],
	higher_tiers: "none"
}