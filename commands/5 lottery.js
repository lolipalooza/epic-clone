exports.run = async (client, message, args) => {
	message.channel.send( "Lottery" )
}

exports.help = {
	name: "lottery",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Lottery",
	description: "-",
	usage: "lottery",
	aliases: []
}