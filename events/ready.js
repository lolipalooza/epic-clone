const schedules = require('../utils/schedules')

module.exports = client => {
	console.log(`Logged in as ${client.user.tag}!`)
	
	client.user.setPresence({
       status: "online",
       game: {
           name: "EPIC CLON™ | .help",
           type: "WATCHING"
       }
    })
	
	schedules.build()
}

