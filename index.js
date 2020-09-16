const Discord = require('discord.js')
const client = new Discord.Client()
const auth = require('./auth.json')
const _data = require('./data.json')
const fs = require('fs')

client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err)
    files.forEach(file => {
        if (!file.endsWith(".js")) return
        let props = require(`./commands/${file}`)
        let commandName = file.split(".")[0]
        client.commands.set(commandName, props)
    })
})

fs.readdir('./events/', (err, files) => {
	files.forEach(file => {
		const eventHandler = require(`./events/${file}`)
		const eventName = file.split('.')[0]
		client.on(eventName, (...args) => eventHandler(client, ...args))
	})
})

//client.login(process.env.BOT_TOKEN)
client.login(auth.token)

//client.on("error", (e) => console.error(e))