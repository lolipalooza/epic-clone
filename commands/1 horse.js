const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setAuthor(message.author.username+"'s horse", message.author.displayAvatarURL)
	embed.addField(
		"Juliet", ""
		+"Horse Tier - VIII "+emoji(client,"tier8")+" (SPECIAL)\n"
		+"Horse Boost - 4.8% extra **COINS** and **XP** in the **epic quest** command\n"
		+"Horse Level - 20 (next level: 3,959,493 coins)\n"
		+"\n"
		+"__Tier Boosts__:\n"
		+"• 80% extra daily and weekly coins\n"
		+"• Immortality (hunt, adventure)\n"
		+"• x3 chance to drop lootboxes\n"
		+"• No key is required in dungeons\n"
		+"• x1.5 chance to drop a monster item\n"
		+"• Better enchantments")
	embed.addField(
		"Horse commands", ""
		+"`horse training` - train your horse and it will level up, the cost depends on your horse's level\n"
		+"`horse breeding @player` - breed your horse with another player's one, more info with `help horse`\n"
		+"`horse race` - join the next horse race (requires a horse tier V or higher)")
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "horse",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Horse",
	description: "Shows your horse, and its stats\n"
		+"There are 9 tiers, you can get a better tier horse by breeding your horse with another player's one, **breeding your horse with a lower tier may result in a lower tier horse**. Since Tier V, horses can join horse races, learn more about them with `help race`\n"
		+"There are 5 type of horses: **DEFENDER** (DEF), **STRONG** (AT), **TANK** (HP), **GOLDEN** (COINS), **SPECIAL** (unlocks `epic quest`)\n"
		+"The max level for a horse is 10 * tier (for example, 30 for a horse tier III)"
		+"",
	usage: "horse [@player]",
	aliases: [],
	higher_tiers: "none",
}