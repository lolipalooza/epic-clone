exports.run = async (client, message, args) => {
	message.channel.send( "Top" )
}

exports.help = {
	name: "top",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Top",
	description: "Shows a leaderboards of the best players sorted by what you choose\n"
		+"Server leaderboards: `level`, `coins` (up to 5 pages)\n"
		+"Global leaderboards: `globallevel`, `globalcoins`, `timetravel`, `cookies`, `horse`, `worker`, `crafter`, `lootboxer`, `merchant`, `enchanter`, `guilds`, `pets`\n"
		+"The global leaderboards are updated every 30 minutes"
		+"",
	usage: "top [type]",
	aliases: [ 'leaderboard', 'ranking' ],
	higher_tiers: "none",
}