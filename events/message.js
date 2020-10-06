const fs = require('fs')

module.exports = (client, message) => {
	
	//let prefix = JSON.parse( fs.readFileSync('./data.json') ).prefix
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
				let match = msg.match(new RegExp("^"+prefix.trim()+" +(?:"+cmd+aliases+") +(.+?)$"))
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