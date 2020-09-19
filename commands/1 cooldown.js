const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setAuthor(message.author.username+"'s cooldowns", message.author.displayAvatarURL)
	embed.addField(
		":gift: Rewards", ""
		+":clock4: ~-~ `Daily` (**5h 39m 14s**)\n"
		+":clock4: ~-~ `Weekly` (**2d 1h 36m 44s**)\n"
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
		+":clock4: ~-~ `Arena` (**0d 6h 13m 57s**)\n"
		+":white_check_mark: ~-~ `Dungeon | Miniboss`"
		+"")
	embed.setFooter("Check the short version with '"+CONFIG_PREFIX+"rd'")
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "cooldown",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Cd",
	description: "Shows your cooldowns, there will be a :white_check_mark: if you can use the command\n"
				+"Use `rpg rd` to see only the ready commands",
	usage: "cooldown",
	aliases: [ 'cd' ],
	higher_tiers: "none",
}