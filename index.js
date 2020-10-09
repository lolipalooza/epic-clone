require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')

CONFIG_PREFIX = require('./config.json').prefix

client.commands = new Discord.Collection()
client.command_aliases = new Discord.Collection()
client.items = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err)
    files.forEach(file => {
        if (!file.endsWith(".js")) return
        let props = require(`./commands/${file}`)
        let commandName = props.help.name.toLowerCase() //file.split(".")[0]
        client.commands.set(commandName, props)
		if (props.help.aliases.length > 0)
			props.help.aliases.forEach(alias => {
				client.command_aliases.set(alias, props)
			})
    })
})

fs.readdir("./items/", (err, files) => {
    if (err) return console.log(err)
    files.forEach(file => {
        if (!file.endsWith(".js")) return
        let props = require(`./items/${file}`)
        let itemName = props.help.name.toLowerCase()
        client.items.set(itemName, props)
    })
})

fs.readdir('./events/', (err, files) => {
	files.forEach(file => {
		const eventHandler = require(`./events/${file}`)
		const eventName = file.split('.')[0]
		client.on(eventName, (...args) => eventHandler(client, ...args))
	})
})

client.login(process.env.BOT_TOKEN)

//client.on("error", (e) => console.error(e))