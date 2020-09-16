const activity = require('../functions/activity')

module.exports = client => {
	console.log(`Logged in as ${client.user.tag}!`)
	
	activity.set( client, activity.get() ) // Initialize the bot with an activity
	
	// Change the bot activity each 12 minutes
	setInterval(() => { activity.set( client, activity.get() )}, 1000*60*12)
}