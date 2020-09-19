const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setAuthor(message.author.username+"'s ready", message.author.displayAvatarURL)
	embed.addField(
		":gift: Rewards", ""
		+":white_check_mark: ~-~ `Daily`\n"
		+":white_check_mark: ~-~ `Weekly`\n"
		+":white_check_mark: ~-~ `Lootbox`\n"
		+":white_check_mark: ~-~ `Vote`"
		+"")
	embed.addField(
		""+emoji(client,"epicrpgsword")+" Experience", ""
		+":white_check_mark: ~-~ `Hunt`\n"
		+":white_check_mark: ~-~ `Adventure`\n"
		+":white_check_mark: ~-~ `Training`\n"
		+":white_check_mark: ~-~ `Duel`\n"
		+":white_check_mark: ~-~ `Quest | Epic quest`"
		+"")
	embed.addField(
		":sparkles: Progress", ""
		+":white_check_mark: ~-~ `Chop | Fish | Pickup | Mine`\n"
		+":white_check_mark: ~-~ `Horse breeding | Horse race`\n"
		+":white_check_mark: ~-~ `Arena`\n"
		+":white_check_mark: ~-~ `Dungeon | Miniboss`"
		+"")
	embed.setFooter("Check the long version with '"+CONFIG_PREFIX+"cd'")
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "rd",
	//category: ":medal: Statistics commands :medal:",
	//category_order: 1,
	title: "Rd",
	description: "Shows your cooldowns, except those that are not ready\n"
				+"Use `"+CONFIG_PREFIX+"cd` to see all cooldowns",
	usage: "rd",
	aliases: [ 'ready' ],
	higher_tiers: "none",
}