const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	let player = require('../utils/data').get(message.author.discriminator)

	let enchantments = ['Not enchanted', 'Normie', 'Good', 'Great', 'Mega',
		'Epic', 'Hyper', 'Ultimate', 'Perfect', 'Edgy', 'Ultra-Edgy', 'Omega', 'Ultra-Omega', 'Godly']
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setAuthor(`${message.author.username}'s profile`, message.author.displayAvatarURL)
	embed.setThumbnail(message.author.displayAvatarURL)
	embed.setDescription(`**${player.title}**`)
	embed.addField(
		"PROGRESS", ""
		+`**Level**: ${player.profile.level} (${player.profile.exp/player.profile.max_exp*100}%)\n`
		+`**XP**: ${new Intl.NumberFormat('en-US').format(player.profile.exp)}/${new Intl.NumberFormat('en-US').format(player.profile.max_exp)}\n`
		+`**Area**: ${player.profile.area} (Max: ${player.profile.max_area})`)
	embed.addField(
		"STATS", ""
		+`:dagger: **AT**: ${player.stats.attack}\n`
		+`:shield: **DEF**: ${player.stats.defense}\n`
		+`:heart: **LIFE**: ${player.stats.hp}/${player.stats.max_hp}`)
	embed.addField(
		"EQUIPMENT", ""
		+ (player.equipment.sword.icon ? `${player.equipment.sword.icon} [${enchantments[player.equipment.sword.enchantment]}]` : "No sword") +"\n"
		+ (player.equipment.armor.icon ? `${player.equipment.armor.icon} [${enchantments[player.equipment.armor.enchantment]}]` : "No armor") +"\n"
		+`${Object.keys(player.horse).length===0?":x:":player.horse.icon} ${Object.keys(player.horse).length===0?"No horse":"["+player.horse.type+"]"}`, true)
	embed.addField(
		"MONEY", ""
		+`${emoji(client,"coin")} **Coins**: ${new Intl.NumberFormat('en-US').format(player.stats.coins)}\n`
		+`${emoji(client,"epiccoin")} **EPIC coins**: ${new Intl.NumberFormat('en-US').format(player.stats.epic_coins)}\n`
		+(Object.keys(player.stats.bank).length>0 ? `${emoji(client,"epicrpgbank")} **Bank**: ${new Intl.NumberFormat('en-US').format(player.stats.bank.account)}` : ``), true)
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