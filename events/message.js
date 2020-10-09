const fs = require('fs')
const initialize = require('../functions/initialize')

module.exports = (client, message) => {
	
	let prefix = CONFIG_PREFIX.toLowerCase()
	let msg = message.content.toLowerCase()

	if (msg.indexOf(prefix)=== 0) {
		client.commands.forEach((command, commandName) => {
			let cmd = commandName.toLowerCase()
			let aliases = command.help.aliases.join("|").toLowerCase()
			let tiers = []
			if (command.help.tiers)
				command.help.tiers.forEach(tier => {tiers.push(tier.name.toLowerCase())})
			aliases = (aliases ? "|"+aliases : "") + (tiers.length>0 ? "|"+tiers.join("|") : "")

			if (new RegExp("^"+prefix.trim()+" +(?:"+cmd+aliases+")($| )").test(msg)){

				let user = message.author.discriminator

				if ( ! require('../utils/data').get(user) ) {
					initialize(user)
					message.channel.send("First time playing, **"+message.author.username+"**? `"+CONFIG_PREFIX+"start`")
				}
				
				else {
					let match = msg.match(new RegExp("^"+prefix.trim()+" +(?:"+cmd+aliases+") +(.+?)$"))
					if (match && match.length>1){
						const args = match[1].trim().split(/ +/g)
						command.run(client, message, args)
					} else {
						command.run(client, message, [])
					}
				}
			}
		})
	}
}