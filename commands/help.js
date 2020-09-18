const Discord = require("discord.js")
const fs = require('fs')
const emoji = require('../functions/utils.js').emoji

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
		embed.addField(emoji(client,"ancientdragon")+" Commands unlocked on higher areas "+emoji(client,"ancientdragon"),
			":zero::two: `a` `b`\n" +
			":zero::three: `a` `b`\n" +
			":zero::four: `a`\n" +
			":zero::five: `a`\n" +
			":zero::six: `a`\n" +
			":zero::seven: `a`\n" +
			":zero::eight: `a`\n" +
			":zero::nine: `a`\n" +
			":one::zero: `a`\n" +
			":one::one: `a`\n" +
			":one::two: `a`\n" +
			":one::three: `a`\n" +
			":one::four: `a`\n" +
			":one::five: `a`\n" +
			"")
		embed.addField("Links", "**[Link de invitación](https://discord.com/api/oauth2/authorize?client_id=755830117384847620&permissions=0&scope=bot) | [Server del Bot](https://discord.gg/vHxfwv) | Patreon (**no tengo :V**)**")
		embed.setFooter("RPG CLON - Una mala copia de EPIC RPG, llena de bugs y que quedará inconclusa...", client.user.avatarURL)
		return message.channel.send({embed});
		
	}else{
		if (client.commands.has(command) || client.command_aliases.has(command)){
			let _command = client.commands.get(command) || client.command_aliases.get(command);
			let _aliases = _command.help.aliases.join("`, `")
			_aliases = _aliases ? ", `"+_aliases+"`" : ""
			embed.setTitle(`${_command.help.title}`)
			embed.setDescription(`${_command.help.description}`)
			embed.addField(`Usage`, "`"+`${prefix}${_command.help.usage}`+"`")
			embed.addField("Alias", "`"+`${_command.help.name}`+"`"+_aliases)
			embed.addField("Higher Tiers", `${_command.help.higher_tiers}`)
			return message.channel.send( {embed} )
		}else{
			return message.channel.send("**Error:** comando no reconocido, revisa la sintaxis.\nConsulta todos los comandos con `rpg help`")
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