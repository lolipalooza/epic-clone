const Discord = require("discord.js")
const fs = require('fs')
const emoji = require('../functions/utils.js').emoji
const hasTierCommand = require('../functions/utils.js').hasTierCommand
const getTierCommand = require('../functions/utils.js').getTierCommand

var areas = [
	{area: 2,	icon: ":zero::two:",	commands: []},
	{area: 3,	icon: ":zero::three:",	commands: []},
	{area: 4,	icon: ":zero::four:",	commands: []},
	{area: 5,	icon: ":zero::five:",	commands: []},
	{area: 6,	icon: ":zero::six:",	commands: []},
	{area: 7,	icon: ":zero::seven:",	commands: []},
	{area: 8,	icon: ":zero::eight:",	commands: []},
	{area: 9,	icon: ":zero::nine:",	commands: []},
	{area:10,	icon: ":one::zero:",	commands: []},
	{area:11,	icon: ":one::one:",		commands: []},
	{area:12,	icon: ":one::two:",		commands: []},
	{area:13,	icon: ":one::three:",	commands: []},
	{area:14,	icon: ":one::four:",	commands: []},
	{area:15,	icon: ":one::five:",	commands: []},
]

exports.run = async(client, message, args, level) => {
	//let prefix = JSON.parse( fs.readFileSync('./data.json') ).prefix
	let prefix = CONFIG_PREFIX
	let command = args[0] || null;
	let embed = new Discord.RichEmbed()
		.setColor(message.guild.me.displayHexColor)
  
	if (command == null) {
		
		var myCommands = new Array
		client.commands.forEach(command => {
			if(command.help.category)
				myCommands.push(command)
			if(command.help.tiers)
				command.help.tiers.forEach(tier => {
					for(let i=0; i<areas.length; i++) {
						if (areas[i].area == tier.area)
							areas[i].commands.push(tier.name)
					}
				})
		})
		embed.setThumbnail(client.user.avatarURL)
		embed.setAuthor("Lista de Comandos", client.user.avatarURL)
		embed.setDescription("**Usa** ``" +`${prefix}help <nombre del comando>`+"`` **para más detalles.**"
							+"\n**Agrega el prefijo `" +`${prefix.trim()}`+ "` ante cada comando.**");
		const sorted = myCommands.sort((p, c) => p.help.category_order > c.help.category_order ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
		let o="";
		let lastCat = sorted[0].help.category;
		let cat = "";
		sorted.forEach( c => {
			cat = c.help.category
			if(lastCat!==cat) {
				embed.addField(lastCat,o)
				o=""
			}
			o+= "`" +c.help.name + "`  "
			lastCat = cat;
		})
		embed.addField(cat,o)
		
		// Area Commands
		let field = ""
		areas.forEach(item => {
			field += (item.icon+" "+(item.commands.length>0?("`"+item.commands.join("` `")+"`"):"")+"\n")
		})
		embed.addField(""+emoji(client,"ancientdragon")+" Commands unlocked on higher areas "+emoji(client,"ancientdragon"), field)
		embed.addField("Links", "**[Link de invitación](https://discord.com/api/oauth2/authorize?client_id=755830117384847620&permissions=0&scope=bot) | [Server del Bot](https://discord.gg/vHxfwv) | Patreon (**no tengo :V**)**")
		embed.setFooter("RPG CLON - Una mala copia de EPIC RPG, llena de bugs y que quedará inconclusa...", client.user.avatarURL)
		return message.channel.send({embed});
		
	}else{
		if (client.commands.has(command) || client.command_aliases.has(command) || client.commands.has(args.join(" ")) || hasTierCommand(client, command)){
			let _command = client.commands.get(command) || client.command_aliases.get(command) || client.commands.get(args.join(" ")) || getTierCommand(client, command)
			if (!_command.help.title || !_command.help.description)
				return message.channel.send("**Error:** comando no reconocido, revisa la sintaxis.\nConsulta todos los comandos con `"+CONFIG_PREFIX+"help`")
			let _aliases = _command.help.aliases.join("`, `")
			_aliases = _aliases ? ", `"+_aliases+"`" : ""
			embed.setTitle(`${_command.help.title}`)
			embed.setDescription( typeof(_command.help.description)=="string" ? _command.help.description : _command.help.description(client) )
			embed.addField(`Usage`, "`"+`${prefix}${_command.help.usage}`+"`")
			embed.addField("Alias", "`"+`${_command.help.name}`+"`"+_aliases)
			embed.addField("Higher Tiers", `${_command.help.higher_tiers}`)
			return message.channel.send( {embed} )
		}else{
			return message.channel.send("**Error:** comando no reconocido, revisa la sintaxis.\nConsulta todos los comandos con `"+CONFIG_PREFIX+"help`")
		}
	}
}

exports.help = {
  name: "help",
  //category: "Util",
  description: "Muestra la lista de comandos.",
  usage: "help [comando]",
  aliases: [ 'h' ]
}