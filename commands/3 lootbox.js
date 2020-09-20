const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setTitle("Buy a lootbox with `"+CONFIG_PREFIX+"buy [lootbox name]`")
	embed.addField(
		""+emoji(client,"commonlootbox")+" Common lootbox - 1,000 coins | Lv 2", ""
		+"Common loot: "+emoji(client,"woodenlog")+" :fish:\n"
		+"Uncommon loot: "+emoji(client,"epiclog")+" :tropical_fish:\n"
		+"Rare loot: "+emoji(client,"wolfskin")+"\n"
		+"1 ~ 2 items")
	embed.addField(
		""+emoji(client,"uncommonlootbox")+" Uncommon lootbox - 7,500 coins | Lv 4", ""
		+"Common loot: "+emoji(client,"woodenlog")+" :fish: "+emoji(client,"epiclog")+" :tropical_fish:\n"
		+"Uncommon loot: "+emoji(client,"wolfskin")+"\n"
		+"Rare loot: "+emoji(client,"commonlootbox")+" "+emoji(client,"zombieeye")+" "+emoji(client,"superlog")+"\n"
		+"3 ~ 5 items")
	embed.addField(
		""+emoji(client,"rarelootbox")+" Rare lootbox - 50,000 coins | Lv 6", ""
		+"Common loot: "+emoji(client,"woodenlog")+" :fish: :apple: "+emoji(client,"epiclog")+" :tropical_fish:\n"
		+"Uncommon loot: :banana: "+emoji(client,"wolfskin")+" "+emoji(client,"zombieeye")+"\n"
		+"Rare loot: "+emoji(client,"uncommonlootbox")+" "+emoji(client,"superlog")+" "+emoji(client,"unicornhorn")+" "+emoji(client,"megalog")+"\n"
		+"7 ~ 10 items")
	embed.addField(
		""+emoji(client,"epiclootbox")+" EPIC lootbox - 200,000 coins | Lv 8", ""
		+"Common loot: :apple: "+emoji(client,"epiclog")+" :tropical_fish: :banana:\n"
		+"Uncommon loot: "+emoji(client,"wolfskin")+" "+emoji(client,"zombieeye")+" "+emoji(client,"unicornhorn")+" "+emoji(client,"ruby")+" "+emoji(client,"superlog")+"\n"
		+"Rare loot: "+emoji(client,"rarelootbox")+" "+emoji(client,"mermaidhair")+" "+emoji(client,"megalog")+" "+emoji(client,"hyperlog")+"\n"
		+"12 ~ 17 items")
	embed.addField(
		""+emoji(client,"edgylootbox")+" EDGY lootbox - 420,666 coins | Lv 10", ""
		+"Common loot: "+emoji(client,"epiclog")+" :tropical_fish: :banana: "+emoji(client,"ruby")+"\n"
		+"Uncommon loot: "+emoji(client,"wolfskin")+" "+emoji(client,"zombieeye")+" "+emoji(client,"unicornhorn")+" "+emoji(client,"mermaidhair")+" "+emoji(client,"chip")+" "+emoji(client,"superlog")+" "+emoji(client,"megalog")+"\n"
		+"Rare loot: "+emoji(client,"epiclootbox")+" "+emoji(client,"epiccoin")+" "+emoji(client,"epicfish")+" "+emoji(client,"hyperlog")+" "+emoji(client,"ultralog")+"\n"
		+"19 ~ 26 items")
	embed.addField(
		""+emoji(client,"omegalootbox")+" OMEGA lootbox - drop only", ""
		+"Common loot: "+emoji(client,"epiccoin")+" "+emoji(client,"megalog")+"\n"
		+"Uncommon loot: "+emoji(client,"epicfish")+" "+emoji(client,"hyperlog")+"\n"
		+"Rare loot: "+emoji(client,"ultralog")+"\n"
		+"31 ~ 44 items")
	embed.addField(
		""+emoji(client,"godlylootbox")+" GODLY lootbox - drop only", ""
		+"Common loot: "+emoji(client,"cookie")+" "+emoji(client,"epiccoin")+"\n"
		+"Uncommon loot: "+emoji(client,"ultralog")+"\n"
		+"Rare loot: :cyclone:\n"
		+"500 ~ 800 items")
	embed.addField(
		"You can buy a lootbox every 3 hours!", ""
		+"Open them with `open`")
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "lootbox",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Lootbox",
	description: "Shows detailed information about lootboxes, you can open a lootbox with `open` or `use`\n"
		+"Lootboxes are possible to drop in `hunt` and `adventure` or buy in the `shop` (cooldown of 3 hours)\n"
		+"**Note that you can't carry more than one lootbox at once!** So you cannot drop a lootbox if you have one in your `inventory`!\n"
		+"",
	usage: "lootbox",
	aliases: ['lb'],
	higher_tiers: "none",
}