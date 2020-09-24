const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	if (args.length>0 && args[0] == "advanced") {
		
		embed.addField(
			"Late game", ""
			+"Alright, you did it! You have beaten the first 9 dragons, now everything will get harder: you will need to learn a little bit about the next dungeons")
		embed.addField(
			"DUNGEON `10` - PLAYERS: `2` - TIME: `12m`", ""
			+"Requirements:\n"
			+"- "+emoji(client,"edgysword")+" **EDGY sword** (both players)\n"
			+"- "+emoji(client,"edgyarmor")+" **EDGY armor** (both players)\n"
			+"- "+emoji(client,"dungeonkey")+" **dungeon key** (or a tier VI+ horse)\n"
			+"This dungeon is purely strategic: if you know what to do, you cannot fail")
		embed.addField(
			"DUNGEON `11` - PLAYERS: `1` - TIME: `12m`", ""
			+"Requirements:\n"
			+"- :cyclone: **1 time travel**\n"
			+"- "+emoji(client,"ultraedgysword")+" **ULTRA-EDGY sword**\n"
			+"- "+emoji(client,"dungeonkey")+" **dungeon key** (or a tier VI+ horse)\n"
			+"This dungeon's mechanic is completely different to the previous ones")
		embed.addField(
			"DUNGEON `12` - PLAYERS: `1` - TIME: `16m`", ""
			+"Requirements:\n"
			+"- :cyclone: **3 time travels**\n"
			+"- "+emoji(client,"ultraedgyarmor")+":ULTRAEDGYARMOR: **ULTRA-EDGY armor**\n"
			+"- "+emoji(client,"dungeonkey")+" **dungeon key** (or a tier VI+ horse)\n"
			+"Similar to the previous one, but more strategic")
		embed.addField(
			"DUNGEON `13` - PLAYERS: `1` - TIME: `18m`", ""
			+"Requirements:\n"
			+"- :cyclone: **5 time travels**\n"
			+"- "+emoji(client,"omegasword")+" **OMEGA sword**\n"
			+"- "+emoji(client,"dungeonkey")+" **dungeon key** (or a tier VI+ horse)\n"
			+"Too much text")
		embed.addField(
			"DUNGEON `14` - PLAYERS: `1` - TIME: `16m`", ""
			+"Requirements:\n"
			+"- :cyclone: **10 time travels**\n"
			+"- "+emoji(client,"omegaarmor")+" **OMEGA armor**\n"
			+"- "+emoji(client,"dungeonkey")+" **dungeon key** (or a tier VI+ horse)\n"
			+"This dungeon doesn't even explain to you how it works")
		embed.addField(
			"DUNGEON `15` - PLAYERS: `1` - TIME: `18m`", ""
			+"Requirements:\n"
			+"- :cyclone: **25 time travels**\n"
			+"- "+emoji(client,"ultraomegasword")+" **ULTRA-OMEGA sword**\n"
			+"- "+emoji(client,"ultraomegaarmor")+" **ULTRA-OMEGA armor**\n"
			+"- "+emoji(client,"dogpet")+" "+emoji(client,"catpet")+" "+emoji(client,"dragonpet")+" a pet of each type **TIER IV+**\n"
			+"- "+emoji(client,"dungeonkey")+" **dungeon key** (or a tier VI+ horse)\n"
			+"The dragon does not take damage lol")
		embed.setFooter('"TIME" refers to the maximum time you have to do the dungeon')
		
	} else {
		embed.addField(
			"Welcome, "+message.author.username+"!", ""
			+"The **main** purpose of the game is to unlock **higher areas** to become stronger\n"
			+"There's a total of **15** areas, and you start in area #1")
		embed.addField(
			"__ALRIGHT, HOW DO I PLAY?__", ""
			+":small_blue_diamond: **Get XP and COINS** with `hunt` and `adventure`, you can check your progress with `profile`\n"
			+":small_blue_diamond: **WARNING! You will lose a level if you die!** Use `heal` when your HP is low")
		embed.addField(
			"__WHAT ELSE CAN I DO?__", ""
			+":small_blue_diamond: Use your coins in the `shop` or just **gamble them** (`dice`, `slots`, `cups`, etc)\n"
			+":small_blue_diamond: Get **MORE COINS** with `daily`, `weekly` and `vote`\n"
			+":small_blue_diamond: Get items with `chop` and `fish` to craft equipment with `craft`!")
		embed.addField(
			"__HOW DOES THE DUNGEON WORK?__", ""
			+":small_blue_diamond: When you feel ready, buy a **dungeon key** and enter with `dungeon`! If you kill the boss, you will unlock the next area!\n"
			+":small_blue_diamond: New areas means new items, recipes, commands, enemies, boosts and a **harder dungeon**"
			+"\n"
			+"\nCheck all commands with `help`!")
		embed.setFooter('Make sure to read the "rules" command too!')
	}
		
	message.channel.send( {embed} )}

exports.help = {
	name: "start",
	aliases: [],
}