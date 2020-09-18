exports.run = async (client, message, args) => {
	message.channel.send( "Blackjack" )
}

exports.help = {
	name: "blackjack",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Blackjack",
	description: "-",
	usage: "blackjack",
	aliases: [ 'bj' ]
}