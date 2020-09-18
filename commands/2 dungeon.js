exports.run = async (client, message, args) => {
	message.channel.send( "Dungeon" )
}

exports.help = {
	name: "dungeon",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Dungeon",
	description: "Used to enter a dungeon, **but you cannot enter alone** (max players: 4)\n"
		+"If you succeed, you and your friend(s) will unlock the next area, there is a total of 15 areas\n"
		+"All players have to be in the same area and have a key to enter the dungeon, it is also not possible to enter a dungeon if any of the players already defeated its corresponding boss"
		+"",
	usage: "dungeon [@player]",
	aliases: ['dung'],
	higher_tiers: "none",
}