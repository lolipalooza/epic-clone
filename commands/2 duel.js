exports.run = async (client, message, args) => {
	message.channel.send( "Duel" )
}

exports.help = {
	name: "duel",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Duel",
	description: "Used to fight with the tagged player, both will have to choose a weapon\n"
		+"The player with higher score will get a reward\n"
		+"The score depends on what weapon is chosen, each weapon is boosted with a different stat (AT, DEF, HP, etc)\n"
		+"",
	usage: "duel [@player]",
	aliases: [],
	higher_tiers: "none",
}