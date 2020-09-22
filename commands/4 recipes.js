const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setDescription("**See more with `"+CONFIG_PREFIX+"recipes [basic, advanced, items, cook]`**")
	
	if (args.length==0 || args.length>0 && (args[0]=="basic"||args[0]=="1")){
		embed.addField(
			"Level 1 recipes", ""
			+""+emoji(client,"woodensword")+" `wooden sword` **[4 at]** ➜ 1 "+emoji(client,"epiclog")+" + 15 "+emoji(client,"woodenlog")+"\n"
			+""+emoji(client,"fisharmor")+" `fish armor` **[9 def]** ➜ 20 :fish: + 10 "+emoji(client,"woodenlog")+"")
		embed.addField(
			"Level 2 recipes", ""
			+""+emoji(client,"fishsword")+" `fish sword` **[13 at]** ➜ 20 :tropical_fish: + 5 "+emoji(client,"epiclog")+"\n"
			+""+emoji(client,"wolfarmor")+" `wolf armor` **[20 def]** ➜ 120 "+emoji(client,"woodenlog")+" + 2 "+emoji(client,"epiclog")+" + 2 "+emoji(client,"wolfskin")+"")
		embed.addField(
			"Level 4 recipes", ""
			+""+emoji(client,"applesword")+" `apple sword` **[32 at]** ➜ 70 :apple: + 90 "+emoji(client,"woodenlog")+" + 1 "+emoji(client,"superlog")+"\n"
			+""+emoji(client,"eyearmor")+" `eye armor` **[26 def]** ➜ 1 "+emoji(client,"zombieeye")+" + 210 "+emoji(client,"woodenlog")+" + 3 "+emoji(client,"superlog")+"")
		embed.addField(
			"Level 6 recipes", ""
			+""+emoji(client,"zombiesword")+" `zombie sword` **[43 at]** ➜ 230 "+emoji(client,"woodenlog")+" + 50 :apple: + 3 "+emoji(client,"superlog")+" + 1 "+emoji(client,"zombieeye")+"\n"
			+""+emoji(client,"bananaarmor")+" `banana armor` **[36 def]** ➜ 350 "+emoji(client,"woodenlog")+" + 25 :banana: + 8 "+emoji(client,"superlog")+"")
		embed.addField(
			"Level 8 recipes", ""
			+""+emoji(client,"rubysword")+" `ruby sword` **[63 at]** ➜ 5 "+emoji(client,"ruby")+" + 1 "+emoji(client,"megalog")+" + 400 "+emoji(client,"woodenlog")+"\n"
			+""+emoji(client,"epicarmor")+" `epic armor` **[42 def]** ➜ 125 "+emoji(client,"epiclog")+" + 1 "+emoji(client,"epicfish")+""
			+"\n"
			+"\n**Make sure you meet the level requirement!**")
	}
	else if (args.length>0 && (args[0]=="advanced"||args[0]=="2")) {
		embed.addField(
			"Level 11 recipes", ""
			+""+emoji(client,"unicornsword")+" `unicorn sword` **[82 at]** ➜ 6 "+emoji(client,"unicornhorn")+" + 500 :fish: + 8 "+emoji(client,"superlog")+"\n"
			+""+emoji(client,"rubyarmor")+" `ruby armor` **[54 def]** ➜ 10 "+emoji(client,"ruby")+" + 8 "+emoji(client,"unicornhorn")+" + 12 "+emoji(client,"superlog")+" + 3 "+emoji(client,"megalog")+"")
		embed.addField(
			"Level 14 recipes", ""
			+""+emoji(client,"hairsword")+" `hair sword` **[89 at]** ➜ 10 "+emoji(client,"mermaidhair")+" + 5 "+emoji(client,"megalog")+"\n"
			+""+emoji(client,"coinarmor")+" `coin armor` **[68 def]** ➜ 654,321 "+emoji(client,"coin")+" + 1 "+emoji(client,"hyperlog")+"")
		embed.addField(
			"Level 17 recipes", ""
			+""+emoji(client,"coinsword")+" `coin sword` **[96 at]** ➜ 1,234,567 "+emoji(client,"coin")+" + 5 "+emoji(client,"ruby")+" + 2 "+emoji(client,"hyperlog")+"\n"
			+""+emoji(client,"mermaidarmor")+" `mermaid armor` **[83 def]** ➜ 25 "+emoji(client,"mermaidhair")+" + 12 "+emoji(client,"megalog")+" + 250 :tropical_fish: + 150 :fish:")
		embed.addField(
			"Level 20 recipes", ""
			+""+emoji(client,"electronicalsword")+" `electronical sword` **[100 at]** ➜ 15 "+emoji(client,"chip")+" + 3 "+emoji(client,"hyperlog")+"\n"
			+""+emoji(client,"electronicalarmor")+" `electronical armor` **[100 def]** ➜ 20 "+emoji(client,"chip")+" + 4 "+emoji(client,"megalog")+" + 1 "+emoji(client,"hyperlog")+"")
		embed.addField(
			"Level 50 recipes", ""
			+""+emoji(client,"edgysword")+" `EDGY sword` **[200 at]** ➜ 1000 "+emoji(client,"woodenlog")+" + 1 "+emoji(client,"ultralog")+"\n"
			+""+emoji(client,"edgyarmor")+" `EDGY armor` **[200 def]** ➜ 50 "+emoji(client,"wolfskin")+" + 50 "+emoji(client,"zombieeye")+" + 50 "+emoji(client,"unicornhorn")+" + 35 "+emoji(client,"mermaidhair")+" + 15 "+emoji(client,"chip")+""
			+"\n"
			+"\n**Make sure you meet the level requirement!**")
	}
	else if (args.length>0 && (args[0]=="items"||args[0]=="3")) {
		embed.addField(
			"Item recipes", ""
			+":tropical_fish: `golden fish` = 15 :fish:\n"
			+""+emoji(client,"epiclog")+" `epic log` = 25 "+emoji(client,"woodenlog")+"\n"
			+""+emoji(client,"superlog")+" `super log` = 10 "+emoji(client,"epiclog")+"\n"
			+""+emoji(client,"megalog")+" `mega log` = 10 "+emoji(client,"superlog")+"\n"
			+""+emoji(client,"hyperlog")+" `hyper log` = 10 "+emoji(client,"megalog")+"\n"
			+""+emoji(client,"ultralog")+" `ultra log` = 10 "+emoji(client,"hyperlog")+"\n"
			+":banana: `banana` = 15 :apple:\n"
			+""+emoji(client,"epicfish")+" `epic fish` = 100 :tropical_fish:"
			+"\n"
			+"\nUse `"+CONFIG_PREFIX+"dismantle` if you want to dismantle the item instead of crafting it (you get 80% of the original craft)")
	}
	else if (args.length>0 && (args[0]=="cook"||args[0]=="4")) {
		embed.addField(
			"Stat cook recipes", ""
			+""+emoji(client,"bakedfish")+" `baked fish` (+5 max hp) ➜ 12 :tropical_fish: + 1 "+emoji(client,"epicfish")+" + 12 "+emoji(client,"epiclog")+"\n"
			+""+emoji(client,"mutantcreature")+" `mutant creature` (+1 def, +1 at) ➜ 2 "+emoji(client,"unicornhorn")+" + 3 "+emoji(client,"wolfskin")+" + 2 "+emoji(client,"zombieeye")+" + 3 "+emoji(client,"mermaidhair")+"\n"
			+""+emoji(client,"fruitsalad")+" `fruit salad` (+1 max hp) ➜ 25 :apple: + 6 :banana:\n"
			+""+emoji(client,"applejuice")+" `apple juice` (+2 def, +2 at) ➜ 8 :apple: + 1 "+emoji(client,"hyperlog")+"\n"
			+""+emoji(client,"supercookie")+" `super cookie` (+10 levels) ➜ 1000 "+emoji(client,"cookie")+"")
		embed.addField(
			"Profession cook recipes", ""
			+""+emoji(client,"bananapickaxe")+" `banana pickaxe` (+100 worker XP) ➜ 6 "+emoji(client,"megalog")+" + 1 :banana:\n"
			+""+emoji(client,"heavyapple")+" `heavy apple` (+100 crafter XP) ➜ 35 "+emoji(client,"ruby")+" + 1 :apple:\n"
			+""+emoji(client,"filledlootbox")+" `filled lootbox` (+100 lootboxer XP) ➜ 1 "+emoji(client,"rarelootbox")+" + 12 :apple: + 8 :banana: + 25 "+emoji(client,"cookie")+"\n"
			+""+emoji(client,"coinsandwich")+" `coin sandwich` (+100 merchant XP) ➜ 2 "+emoji(client,"coin")+" + 12 :fish: + 2 :banana: + 1 "+emoji(client,"epicfish")+""
			+"\n"
			+"\n**Cook recipes are unlocked in area #5 --> `"+CONFIG_PREFIX+"cook [item]`**")
	}
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "recipes",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Recipes",
	description: "Shows all the recipes, you can craft them with `craft [item]`",
	usage: "recipes [page]",
	aliases: [],
	higher_tiers: "none",
}