module.exports = client => {
	let prefix = CONFIG_PREFIX
	console.log(`Logged in as ${client.user.tag}!`)
	
	client.user.setPresence({
       status: "online",
       game: {
           name: "EPIC CLON™ | " +`${prefix}`+ "help",
           type: "WATCHING"
       }
    })
}

