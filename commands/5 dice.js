exports.run = async (client, message, args) => {
	message.channel.send( "Dice" )
}

exports.help = {
	name: "dice",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Dice",
	description: "-",
	usage: "dice",
	aliases: []
}