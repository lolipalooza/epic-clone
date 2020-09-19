exports.run = async (client, message, args) => {
	message.channel.send( "Blackjack" )
}

exports.help = {
	name: "blackjack",
	category: ":game_die: Gambling commands :game_die:",
	category_order: 5,
	title: "Blackjack",
	description: "Used to bet your coins playing blackjack\n"
		+"To win a blackjack game, you have to get as close to 21 as possible, without going over\n"
		+"Each card counts as its number. J, Q and K counts as 10, and A counts as 11 or 1\n"
		+"You start with 2 cards, then you can type **hit** to draw another card or **stay** to pass\n"
		+"If you bust (meaning, you exceed 21), you lose. Otherwise, if you stay and the dealer gets over 21 or scores less than you, you win\n"
		+"\n"
		+"Special rules added: seven-card Charlie (player), seven-card Charlie (dealer)\n"
		+"",
	usage: "blackjack [amount]",
	aliases: [ 'bj' ],
	higher_tiers: "none",
}