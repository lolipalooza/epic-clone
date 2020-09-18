exports.run = async (client, message, args) => {
	message.channel.send( "Horse" )
}

exports.help = {
	name: "horse",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Horse",
	description: "Shows your horse, and its stats\n"
		+"There are 9 tiers, you can get a better tier horse by breeding your horse with another player's one, **breeding your horse with a lower tier may result in a lower tier horse**. Since Tier V, horses can join horse races, learn more about them with `help race`\n"
		+"There are 5 type of horses: **DEFENDER** (DEF), **STRONG** (AT), **TANK** (HP), **GOLDEN** (COINS), **SPECIAL** (unlocks `epic quest`)\n"
		+"The max level for a horse is 10 * tier (for example, 30 for a horse tier III)"
		+"",
	usage: "horse [@player]",
	aliases: [],
	higher_tiers: "none",
}