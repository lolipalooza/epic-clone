const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setTitle(""+emoji(client,"epiccoin")+" **EPIC SHOP**")
	embed.setDescription("**Buy anything with** `"+CONFIG_PREFIX+"buy [item]`")
	embed.addField(
		"Upgrades", ""
		+""+emoji(client,"epicrpgbank")+" **Bank account** - deposit your coins to get a tiny XP bonus! | **2** "+emoji(client,"epiccoin")+"\n"
		+":pencil: **Guild name** - change the name of your guild | **3** "+emoji(client,"epiccoin")+"")
	embed.addField(
		"Profile backgrounds", ""
		+":rainbow: **Background blue** - a profile background, [example]() | **120** "+emoji(client,"epiccoin")+"\n"
		+":rainbow: **Background black** - a profile background, [example]() | **120** "+emoji(client,"epiccoin")+"\n"
		+":rainbow: **Background scroll** - a profile background, [example]() | **120** "+emoji(client,"epiccoin")+"\n"
		+":rainbow: **Background ivy** - a profile background, [example]() | **120** "+emoji(client,"epiccoin")+"\n"
		+"\n**Using a profile background gives access to** `profile short` **(alias:** `p s`**)**")
	embed.addField(
		"Consumables", ""
		+""+emoji(client,"cointrumpet")+" **Coin trumpet** - starts a coin rain event | **6** "+emoji(client,"epiccoin")+"\n"
		+""+emoji(client,"epicseed")+" **Epic seed** - starts an epic tree event | **12** "+emoji(client,"epiccoin")+"\n"
		+""+emoji(client,"ultrabait")+" **Ultra bait** - starts a megalodon event | **14** "+emoji(client,"epiccoin")+"\n"
		+""+emoji(client,"arenatoken")+" **Arena token** - instantly resets your `arena` cooldown | **8** "+emoji(client,"epiccoin")+"\n"
		+""+emoji(client,"horsetoken")+" **Horse token** - keep the horse type in the next horse breeding | **4** "+emoji(client,"epiccoin")+"\n"
		+"\n**These items (except the horse token) have a __shared__ cooldown of 30 min!**")
	embed.setFooter("This shop is a work in progress! more items will come soon")
	
	message.channel.send( {embed} )
}

exports.help = {
	name: "epic shop",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Epic Shop",
	description: client => {
		return "Shows the EPIC shop, you can `buy` items with "+emoji(client,"epiccoin")+" **EPIC coins**\n"
				+"Get EPIC coins with daily streaks, lootboxes, and random events triggered with commands (`help events`)\n"
				+"You can also get EPIC coins as a reward by supporting EPIC RPG --> `"+CONFIG_PREFIX+"donate`"
	},
	usage: "epic shop",
	aliases: ['epic-shop'],
	higher_tiers: "none",
}