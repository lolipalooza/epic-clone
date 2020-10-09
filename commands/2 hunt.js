const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji
const rand = require('../functions/utils.js').rand

exports.run = async (client, message, args) => {
	let player = require('../utils/data').get(message.author.discriminator)

	let monsters = [
		{area: 1,	name: "Goblin"},
		{area: 1,	name: "Slime"},
		{area: 1,	name: "Wolf"},
		{area: 2,	name: "Nymph"},
		{area: 2,	name: "Skeleton"},
		{area: 2,	name: "Wolf"},
		{area: 3,	name: "Baby Demon"},
		{area: 3,	name: "Ghost"},
		{area: 3,	name: "Zombie"},
		{area: 4,	name: "Imp"},
		{area: 4,	name: "Witch"},
		{area: 4,	name: "Zombie"},
		{area: 5,	name: "Ghoul"},
		{area: 5,	name: "Giant Scorpion"},
		{area: 5,	name: "Unicorn"},
		{area: 6,	name: "Baby Robot"},
		{area: 6,	name: "Sorcerer"},
		{area: 6,	name: "Unicorn"},
		{area: 7,	name: "Cecaelia"},
		{area: 7,	name: "Giant Piranha"},
		{area: 7,	name: "Mermaid"},
		{area: 8,	name: "Giant Crocodile"},
		{area: 8,	name: "Nereid"},
		{area: 8,	name: "Mermaid"},
		{area: 9,	name: "Demon"},
		{area: 9,	name: "Harpy"},
		{area: 9,	name: "Killer Robot"},
		{area: 10,	name: "Dullahan"},
		{area: 10,	name: "Manticore"},
		{area: 10,	name: "Killer Robot"},
		{area: 11,	name: "Baby Dragon"},
		{area: 11,	name: "Young Dragon"},
		{area: 11,	name: "Scaled Baby Dragon"},
		{area: 12,	name: "Kid Dragon"},
		{area: 12,	name: "Not so young Dragon"},
		{area: 12,	name: "Scaled Kid Dragon"},
		{area: 13,	name: "Definitely not so young Dragon"},
		{area: 13,	name: "Teen Dragon"},
		{area: 13,	name: "Scaled Teen Dragon"},
	]
	let area_monsters = monsters.filter(monster => { return monster.area === player.profile.area })
	let monster = area_monsters[rand(0,area_monsters.length-1)]
	let monsterName = monster.name.toUpperCase()
	let monsterIcon = emoji(client, monster.name.replace(/ /g, "").toLowerCase())

	let coins = parseInt((player.profile.area * player.profile.area * 12.67).toFixed())
	let exp = parseInt((player.profile.area * player.profile.area * 8 * (1 + 51.5*player.time_travels/100)).toFixed())
	let sum = 82 * player.profile.area - 59
	let dmg = player.stats.attack + player.stats.defense - sum
	dmg = dmg < 0 ? Math.abs(dmg) : 0

	player.stats.hp -= dmg

	if (player.stats.hp <= 0) {
		let msg = `**${message.author.username}** found a ${monsterIcon} ${monsterName}, but lost fighting`
		if (player.profile.level>1) {
			player.profile.level -= 1
			msg += `\nBrave you were. Dead you are. A level you lost`
		}
		player.profile.exp = 0
		player.stats.hp = player.stats.max_hp
		message.channel.send(msg)
		require('../utils/data').store(message.author.discriminator, player)
		return
	}

	player.stats.coins += coins
	player.profile.exp += exp

	let monsterDropEvent = rand(1,100)
	let monsterdrops = [
		{icon:emoji(client,"wolfskin"),		name:"wolf skin",		monster: "wolf"},
		{icon:emoji(client,"zombieeye"),	name:"zombie eye",		monster: "zombie"},
		{icon:emoji(client,"unicornhorn"),	name:"unicorn horn",	monster: "unicorn"},
		{icon:emoji(client,"mermaidhair"),	name:"mermaid hair",	monster: "mermaid"},
		{icon:emoji(client,"chip"),			name:"chip",			monster: "Killer Robot"},
		{icon:emoji(client,"dragonscale"),	name:"dragon scale",	monster: "Scaled"},
	]
	let lootboxes = [
		{icon:emoji(client,"commonlootbox"),	name:"common lootbox"},
		{icon:emoji(client,"uncommonlootbox"),	name:"uncommon lootbox"},
		{icon:emoji(client,"rarelootbox"),		name:"rare lootbox"},
		{icon:emoji(client,"epiclootbox"),		name:"epic lootbox"},
		{icon:emoji(client,"edgylootbox"),		name:"edgy lootbox"},
	]
	
	let lootbox = lootboxes[rand(0,lootboxes.length-1)]

	let md_message="", lb_message="", level_up_msg="", drop_msg = ""
	if (monsterDropEvent <= Math.round(4*(1 + (25,75*player.time_travels/100)))) {
		let monsterdrop
		area_monsters.forEach(m => {
			monsterdrop = monsterdrops.filter(drop => {
				return new RegExp(drop.monster.toLowerCase().replace(/ /g, "")).test(m.name.replace(/ /g, "").toLowerCase())
			})
			if (monsterdrop.length>0) {
				monsterName = m.name.toUpperCase()
				monsterIcon = emoji(client, m.name.replace(/ /g, "").toLowerCase())
			}
		})
		md_message = `\n**${message.author.username}** got an ${monsterdrop[0].icon} ${monsterdrop[0].name}`
		lb_message = `\n**${message.author.username}** got a ${lootbox.name} ${lootbox.icon}`
		if (rand(1,100)<=60 || true) {
			drop_msg = md_message
			let drop = monsterdrop[0].name.replace(/ /g, "")
			player.inventory[drop] = player.inventory[drop] ? player.inventory[drop]+1 : 1
		} else {
			drop_msg = lb_message
			player.inventory[drop] = player.inventory[drop] ? player.inventory[drop]+1 : 1
		}
	}

	let max_exp = player.profile.level*player.profile.level*125
	if (player.profile.exp >= max_exp) {
		level_up_msg = `\n**${message.author.username} leveled up!** +1 :dagger: AT, +1 :shield: DEF, +5 :heart: LIFE`
		player.profile.exp = player.profile.exp - max_exp
		player.profile.level += 1
	}
	
	message.channel.send(
		`**${message.author.username}** found and killed a ${monsterIcon} **${monsterName}**\n`
		+`Earned ${new Intl.NumberFormat('en-US').format(coins)} coins and ${new Intl.NumberFormat('en-US').format(exp)} XP\n`
		+`Lost ${dmg} HP, remaining HP is ${player.stats.hp}/${player.stats.max_hp}`
		+drop_msg+level_up_msg)

	require('../utils/data').store(message.author.discriminator, player)
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
	tiers: [
		{area:0, name:"hunt together"},
		{area:0, name:"hunt alone"},
		{area:13, name:"hunt hardmode"},
	],
}