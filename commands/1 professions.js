const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let player = require('../utils/data').get(message.author.discriminator)

	let embed = new Discord.RichEmbed()
	embed.setColor(message.guild.me.displayHexColor)
	embed.setAuthor(message.author.username+"'s professions", message.author.displayAvatarURL)
	
	let profession = args&&args.length>0 ? args[0].toLowerCase() : null

	let professions = [
		{name: "Worker",	icon: emoji(client,"epiclog"),		desc: "Increases the chance to get a better item with working commands",			desc2: "Get **worker** xp with working commands (chop, fish, pickup, mine)\nYour worker level increases your chance of getting a better item with working commands"},
		{name: "Crafter",	icon: ":tools:",					desc: "There's a chance to keep part of the recipe after crafting an item",			desc2: "Get **crafter** xp by crafting and dismantling (see `recipes`)\nYour crafter level increases your chance to save 10% of a recipe while using `craft`"},
		{name: "Lootboxer",	icon: emoji(client,"edgylootbox"),	desc: "Buffs the bank bonus and reduces the coins required to level up a horse",	desc2: "Get **lootboxer** xp by opening lootboxes\nYour lootboxer level increases your `bank` bonus and reduces the coins required to level up your horse"},
		{name: "Merchant",	icon: ":scales:",					desc: "Increases the prices of the items you sell",									desc2: "Get **merchant** xp by selling and buying items (does not apply for keys, equipment and potions)\nYour merchant level increases the coins you get when selling items"},
		{name: "Enchanter",	icon: ":sparkles:",					desc: "Increases your chance to get a better enchantment",							desc2: "Get **enchanter** xp by enchanting swords and armors\nYour enchanter level increases your chance to get a better enchantment"},
	]

	let level = player.professions[pr.name.toLowerCase()].level
	let exp = player.professions[pr.name.toLowerCase()].exp
	let max_exp = player.professions[pr.name.toLowerCase()].max_exp
	let progress = (exp / max_exp * 100)

	if (profession == null) {
		professions.forEach(pr => {
			let progress_bar = ""
			for(var i=1; i<=10; i++)
				progress_bar += (i<=progress.toFixed() ? "■" : "□")
			embed.addField(`${pr.icon} ${pr.name} Lv ${level} | ${progress_bar}`, pr.desc)
		})
		embed.setFooter("The ascended skill is unlocked when all professions are maxed out")
		message.channel.send( {embed} )

	} else {
		professions.forEach(pr => {
			if (profession === pr.name.toLowerCase()) {
				embed.addField(
					`${pr.icon} ${pr.name}`, ""
					+`**Level**: ${level} (${progress}%)\n`
					+`**XP**: ${exp}/${max_exp}`)
				embed.addField("About this profession", pr.desc2)
				message.channel.send( {embed} )
			}
		})
	} /*else if (profession == "worker") {
		embed.addField(
			""+emoji(client,"epiclog")+" Worker", ""
			+"**Level**: 60 (41.64%)\n"
			+"**XP**: 1243/2985")
		embed.addField(
			"About this profession", ""
			+"Get **worker** xp with working commands (chop, fish, pickup, mine)\n"
			+"Your worker level increases your chance of getting a better item with working commands")
	} else if (profession == "crafter") {
		embed.addField(
			":tools: Crafter", ""
			+"**Level**: 35 (2.98%)\n"
			+"**XP**: 206/6900")
		embed.addField(
			"About this profession", ""
			+"Get **crafter** xp by crafting and dismantling (see `recipes`)\n"
			+"Your crafter level increases your chance to save 10% of a recipe while using `craft`")
	} else if (profession == "lootboxer") {
		embed.addField(
			""+emoji(client,"edgylootbox")+" Lootboxer", ""
			+"**Level**: 61 (65.67%)\n"
			+"**XP**: 989/1506")
		embed.addField(
			"About this profession", ""
			+"Get **lootboxer** xp by opening lootboxes\n"
			+"Your lootboxer level increases your `bank` bonus and reduces the coins required to level up your horse")
	} else if (profession == "merchant") {
		embed.addField(
			":scales: Merchant", ""
			+"**Level**: 17 (53.65%)\n"
			+"**XP**: 2343/4367")
		embed.addField(
			"About this profession", ""
			+"Get **merchant** xp by selling and buying items (does not apply for keys, equipment and potions)\n"
			+"Your merchant level increases the coins you get when selling items")
	} else if (profession == "enchanter") {
		embed.addField(
			":sparkles: Enchanter", ""
			+"**Level**: 28 (3.16%)\n"
			+"**XP**: 174/5500")
		embed.addField(
			"About this profession", ""
			+"Get **enchanter** xp by enchanting swords and armors\n"
			+"Your enchanter level increases your chance to get a better enchantment")
	} else return;*/
}

exports.help = {
	name: "professions",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Professions",
	description: "Shows the progress of your professions\nGet info about a specific professions with `professions [profession]`",
	usage: "professions",
	aliases: [ 'profession', 'pr' ],
	higher_tiers: "none",
}