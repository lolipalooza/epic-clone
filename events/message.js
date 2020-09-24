const fs = require('fs')

module.exports = (client, message) => {
	
	//let prefix = JSON.parse( fs.readFileSync('./data.json') ).prefix
	let prefix = CONFIG_PREFIX
	
	if (message.content.indexOf(prefix)=== 0) {
		client.commands.forEach((command, cmd) => {
			let aliases = command.help.aliases.join("|")
			let tiers = []
			if (command.help.tiers)
				command.help.tiers.forEach(tier => {tiers.push(tier.name)})
			aliases = (aliases ? "|"+aliases : "") + (tiers.length>0 ? "|"+tiers.join("|") : "")
			if (new RegExp("^"+prefix.trim()+" +(?:"+cmd+aliases+")($| )").test(message.content)){
				let match = message.content.match(new RegExp("^"+prefix.trim()+" +(?:"+cmd+aliases+") +(.+?)$"))
				if (match && match.length>1){
					const args = match[1].trim().split(/ +/g)
					command.run(client, message, args)
				} else {
					command.run(client, message, [])
				}
			}
		})
	}
}