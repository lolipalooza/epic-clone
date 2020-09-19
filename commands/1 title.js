const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setDescription("Choose a title with `"+CONFIG_PREFIX+"title [ID]`")
	embed.addField(
		"Level titles", ""
		+":ballot_box_with_check: Level 1 - Normie player - **ID: 0**\n"
		+":ballot_box_with_check: Level 10 - Naisu player - **ID: 1**\n"
		+":ballot_box_with_check: Level 25 - Super player - **ID: 2**\n"
		+":ballot_box_with_check: Level 50 - Legendary player - **ID: 3**\n"
		+":lock: Level 100 - EPIC player - **ID: 4**\n"
		+":lock: Level 200 - EDGY PLAYER - **ID: 5**")
	embed.addField(
		"Coins titles (amount of coins you have)", ""
		+":ballot_box_with_check: 1000 coins - I'm so poor - **ID: 6**\n"
		+":ballot_box_with_check: 10,000 coins - I'm not so poor - **ID: 7**\n"
		+":ballot_box_with_check: 100,000 coins - I have enough to feed my kids - **ID: 8**\n"
		+":ballot_box_with_check: 10M coins - rpg dice all - **ID: 10**\n"
		+":ballot_box_with_check: 100M coins - EPIC GAMBLER - **ID: 11**")
	embed.addField(
		"Dungeon titles", ""
		+":ballot_box_with_check: Area 2 - Dungeon beginner - **ID: 12**\n"
		+":ballot_box_with_check: Area 5 - Dungeon master - **ID: 13**\n"
		+":ballot_box_with_check: Area 10 - DRAGON SLAYER - **ID: 14**")
	embed.addField(
		"Time travel titles", ""
		+":ballot_box_with_check: 1st reset - Time traveler - **ID: 15**\n"
		+":ballot_box_with_check: 2nd reset - One time wasn't enough - **ID: 16**\n"
		+":lock: 5th reset - I spend too much time here - **ID: 17**\n"
		+":lock: 10th reset - OOF - **ID: 18**")
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "title",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Title",
	description: "Used to choose a title, see all titles with `"+CONFIG_PREFIX+"title`",
	usage: "title [ID]",
	aliases: [],
	higher_tiers: "none",
}