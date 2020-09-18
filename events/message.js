const fs = require('fs')

module.exports = (client, message) => {
	
	//let prefix = JSON.parse( fs.readFileSync('./data.json') ).prefix
	let prefix = CONFIG_PREFIX
	
	if (message.content.indexOf(prefix)=== 0) {
		const args = message.content.slice(prefix.length).trim().split(/ +/g)
		const command = args.shift().toLowerCase()
		const cmd = client.commands.get(command)
		const alias = client.command_aliases.get(command)
		const mensaje = message.content.toString().toLowerCase()
		if (cmd) {
			cmd.run(client, message, args,mensaje)
		} else if (alias) {
			alias.run(client, message, args,mensaje)
		}
	}
}