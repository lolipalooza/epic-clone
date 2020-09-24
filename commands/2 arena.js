const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
	
	embed.setColor(message.guild.me.displayHexColor)
	embed.setDescription(""+emoji(client,"epicrpgarena")+" **"+message.author.username+" started an arena event!**")
	embed.addField(
		"Type `join` to join the arena!", ""
		+"Get "+emoji(client,"cookie")+" arena cookies for each player you kill!\n"
		+"Owners of the event will get an extra reward!")
	message.channel.send( {embed} )
	
	embed = new Discord.RichEmbed()
	embed.setDescription("Players: WarCriminal-Kawa, odiofish, ᶜᴿᴬᶻᵞDaX_Ter, EL MJ, EURLWMAN, s̶k̶r̶u̶b̶v̶, Ariess:dagger:, TygressDark, wizzy, :m:ⓔⓖⓤⓜⓘⓝ")
	embed.addField(
		""+emoji(client,"epicrpgarena")+" Ranking", ""
		+"1. TygressDark (+4 "+emoji(client,"cookie")+") - kills: Ariess:dagger:, EURLWMAN, EL MJ, odiofish\n"
		+"2. odiofish (+3 "+emoji(client,"cookie")+") - kills: :m:ⓔⓖⓤⓜⓘⓝ, wizzy, WarCriminal-Kawa\n"
		+"3. EL MJ (+1 "+emoji(client,"cookie")+") - kills: s̶k̶r̶u̶b̶v̶\n"
		+"4. Ariess:dagger: (+1 "+emoji(client,"cookie")+") - kills: ᶜᴿᴬᶻᵞDaX_Ter\n"
		+"5. WarCriminal-Kawa (+0 "+emoji(client,"cookie")+") - no kills\n"
		+"5. ᶜᴿᴬᶻᵞDaX_Ter (+0 "+emoji(client,"cookie")+") - no kills\n"
		+"5. EURLWMAN (+0 "+emoji(client,"cookie")+") - no kills\n"
		+"5. s̶k̶r̶u̶b̶v̶ (+0 "+emoji(client,"cookie")+") - no kills\n"
		+"5. wizzy (+0 "+emoji(client,"cookie")+") - no kills\n"
		+"5. :m:ⓔⓖⓤⓜⓘⓝ (+0 "+emoji(client,"cookie")+") - no kills\n"
		+"\n"
		+"Eat your cookies to earn **XP**! `"+CONFIG_PREFIX+"eat`")
	embed.addField(
		"Arena boost", ""
		+"Players: WarCriminal-Kawa\n"
		+"Reward: 3 "+emoji(client,"cookie")+"")
	message.channel.send( {embed} )
}

exports.help = {
	name: "arena",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Arena",
	description: client => {
		return "Starts an arena event, other players can join (max players: 10)\n"
				+"You can also start the event with other players, this will increase the reward (but uses the arena cooldown of everyone), everyone will have to agree\n"
				+emoji(client,"cookie")+" arena cookies are given per kill\n"
				+"The more players join, the bigger the prizes! **the chance to kill is the same for everyone!**\n"
				+"Then, you can eat your cookies with `eat`"
	},
	usage: "arena [@players]",
	aliases: [],
	higher_tiers: "`big arena`: Unlocked in area 7, a harder arena with better rewards!",
	tiers: [
		{area:7, name:"big arena"},
	],
}