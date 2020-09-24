const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setAuthor(message.author.username+"'s miniboss", message.author.displayAvatarURL)
	embed.setDescription("Help **"+message.author.username+"** defeat :theragingburrito: **THE RAGING BURRITO**")
	embed.addField(
		"Type `fight` to help and get a reward!", ""
		+"**"+message.author.username+"** ~-~ "+emoji(client,"epicrpgsword")+" AT: 273\n"
		+":theragingburrito: **THE RAGING BURRITO** ~-~ "+emoji(client,"epicrpgsword")+" AT: 275")
	message.channel.send( {embed} )
	
	embed = new Discord.RichEmbed()
	embed.setAuthor(message.author.username+"'s miniboss", message.author.displayAvatarURL)
	embed.addField(
		":theragingburrito: THE RAGING BURRITO HAS BEEN DEFEATED!", ""
		+":crown: **"+message.author.username+"**\n"
		+"+93,305 "+emoji(client,"coin")+" coins")
	embed.addField(
		":dagger: Pink, :star2::zap:SOU:zap::star2:, !Rael ✞ Eichman, MicxD, Natural, bunny.ai11:rabbit:, Bruh Moment",
		"+1,866 "+emoji(client,"coin")+" coins")
	embed.addField(
		"Miniboss boost", ""
		+"**Players**: "+message.author.username+"\n"
		+"**Reward bonus**: x1.01 "+emoji(client,"coin")+" coins")
	message.channel.send( {embed} )
}

exports.help = {
	name: "miniboss",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Miniboss",
	description: client => {
		return "Used to fight a **miniboss**\n"
				+"Other people can join to increase the chance of success (max players: 10)\n"
				+"You can also start the event with other players, this will increase the reward (but uses the miniboss cooldown of everyone), everyone will have to agree\n"
				+"If you win, you get "+emoji(client,"coin")+" **coins** depending on your level, there is also a chance to level up\n"
				+"Those who helps gets a tiny amount of coins"
	},
	usage: "miniboss [@players]",
	aliases: [],
	higher_tiers: "`not so mini boss`: Unlocked in area 10, a stronger boss with better rewards!",
	tiers: [
		{area:10, name:"not so mini boss"},
	],
}