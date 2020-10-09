const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	let player = require('../utils/data').get(message.author.discriminator)

	let titles = [
		{type: "level",	text: "Level 1",	threshold: 1,		name: "Normie player",					id: 0,	category: "Level titles"},
		{type: "level",	text: "Level 10",	threshold: 10,		name: "Naisu player",					id: 1,	category: "Level titles"},
		{type: "level",	text: "Level 25",	threshold: 25,		name: "Super player",					id: 2,	category: "Level titles"},
		{type: "level",	text: "Level 50",	threshold: 50,		name: "Legendary player",				id: 3,	category: "Level titles"},
		{type: "level",	text: "Level 100",	threshold: 100,		name: "EPIC player",					id: 4,	category: "Level titles"},
		{type: "level",	text: "Level 200",	threshold: 200,		name: "EDGY PLAYER",					id: 5,	category: "Level titles"},
		{type: "coins",	text: "1000 coins",		threshold: 1000,		name: "I'm so poor",					id: 6,	category: "Coins titles (amount of coins you have)"},
		{type: "coins",	text: "10,000 coins",	threshold: 10000,		name: "I'm not so poor",				id: 7,	category: "Coins titles (amount of coins you have)"},
		{type: "coins",	text: "100,000 coins",	threshold: 100000,		name: "I have enough to feed my kids",	id: 8,	category: "Coins titles (amount of coins you have)"},
		{type: "coins",	text: "10M coins",		threshold: 10000000,	name: "rpg dice all",					id: 10,	category: "Coins titles (amount of coins you have)"},
		{type: "coins",	text: "100M coins",		threshold: 100000000,	name: "EPIC GAMBLER",					id: 11,	category: "Coins titles (amount of coins you have)"},
		{type: "area",	text: "Area 2",		threshold: 2,	name: "Dungeon beginner",				id: 12,	category: "Dungeon titles"},
		{type: "area",	text: "Area 5",		threshold: 5,	name: "Dungeon master",					id: 13,	category: "Dungeon titles"},
		{type: "area",	text: "Area 10",	threshold: 10,	name: "DRAGON SLAYER",					id: 14,	category: "Dungeon titles"},
		{type: "tt",	text: "1st reset",	threshold: 1,	name: "Time traveler",					id: 15,	category: "Time travel titles"},
		{type: "tt",	text: "2nd reset",	threshold: 2,	name: "One time wasn't enough",			id: 16,	category: "Time travel titles"},
		{type: "tt",	text: "5th reset",	threshold: 5,	name: "I spend too much time here",		id: 17,	category: "Time travel titles"},
		{type: "tt",	text: "10th reset",	threshold: 10,	name: "OOF",							id: 18,	category: "Time travel titles"},
	]

	let earnedTitle = (title, ply) => {
		switch(title.type) {
			case "level":	return ply.profile.level >= title.threshold;	break;
			case "coins":	return ply.stats.coins >= title.threshold;		break;
			case "area":	return ply.profile.max_area >= title.threshold;	break;
			case "tt":		return ply.time_travels >= title.threshold;		break;
		}
	}
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setDescription("Choose a title with `"+CONFIG_PREFIX+"title [ID]`")

	let o="",cat="",lastCat = titles[0].category
	titles.forEach( title => {
		cat = title.category
		if(lastCat!==cat) {
			embed.addField(lastCat,o)
			o=""
		}
		let cond = earnedTitle(title, player)
		o += `:${cond?"ballot_box_with_check":"lock"}: ${title.text} - ${title.name} - **ID: ${title.id}**\n`
		lastCat = cat
	})
	embed.addField(cat,o)
	
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