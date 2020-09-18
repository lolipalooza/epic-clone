exports.run = async (client, message, args) => {
	message.channel.send( "Slots" )
}

exports.help = {
	name: "slots",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Slots",
	description: "-",
	usage: "slots",
	aliases: []
}