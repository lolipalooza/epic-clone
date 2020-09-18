const fs = require('fs')

module.exports = (client, message) => {
	
	//let prefix = JSON.parse( fs.readFileSync('./data.json') ).prefix
	let prefix = CONFIG_PREFIX
	
	if (message.content.indexOf(prefix)=== 0) {
		client.commands.forEach((command, cmd) => {
			let aliases = command.help.aliases.join("|")
			aliases = aliases ? "|"+aliases : ""
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