const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji
const rand = require('../functions/utils.js').rand

exports.run = async (client, message, args) => {
	let monsterDropEvent = rand(0,100)
	let monsterdrops = [
	{icon:emoji(client,"wolfskin"),		name:"wolf skin"},
	{icon:emoji(client,"zombieeye"),	name:"zombie eye"},
	{icon:emoji(client,"unicornhorn"),	name:"unicorn horn"},
	{icon:emoji(client,"mermaidhair"),	name:"mermaid hair"},
	{icon:emoji(client,"chip"),			name:"chip"},
	{icon:emoji(client,"dragonscale"),	name:"dragon scale"},
	]
	let lootboxes = [
	{icon:emoji(client,"commonlootbox"),name:"common lootbox"},
	{icon:emoji(client,"uncommonlootbox"),name:"uncommon lootbox"},
	{icon:emoji(client,"rarelootbox"),name:"rare lootbox"},
	{icon:emoji(client,"epiclootbox"),name:"epic lootbox"},
	{icon:emoji(client,"edgylootbox"),name:"edgy lootbox"},
	]
	let monsterdrop = monsterdrops[rand(0,monsterdrops.length-1)]
	let lootbox = lootboxes[rand(0,lootboxes.length-1)]
	let icon = monsterdrop.icon
	let drop = monsterdrop.name
	let md_message = "\n**"+message.author.username+"** got an "+icon+" "+drop+""
	icon = lootbox.icon
	drop = lootbox.name
	let lb_message = "\n**"+message.author.username+"** got a "+drop+" "+icon+""
	let msg = rand(0,1)==0 ? md_message : lb_message
	message.channel.send(
		"**"+message.author.username+"** found and killed a :ghoul: **GHOUL**\n"
		+"Earned 333 coins and 409 XP\n"
		+"Lost 28 HP, remaining HP is 172/200"
		+(monsterDropEvent<4?msg:"")
		+(false?"\n**"+message.author.username+" leveled up!** +1 :dagger: AT, +1 :shield: DEF, +5 :heart: LIFE":""))
}

exports.help = {
	name: "hunt",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Hunt",
	description: client => {
		return "Used to find an enemy, if you kill it you get **XP** and "+emoji(client,"coin")+" **coins** depending on your **area**, but you will lose some HP.\n"
				+"There's also a chance of getting an item from some enemies\n"
				+"If you die, you will lose one level: keep an eye on your HP and use "+emoji(client,"lifepotion")+" **life potions** to restore it!"
	},
	usage: "hunt",
	aliases: [],
	higher_tiers: "`hunt together`: unlocked while married, both players will hunt together and there is no chance to die (both cooldown required)\n"
		+"`hunt alone`: unlocked in level 50, your horse will not help you and the enemies are way stronger\n"
		+"`hunt hardmode`: unlocked in area 13, it has the same enemies but they are stronger and gives better rewards\n",
}