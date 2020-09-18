exports.run = async (client, message, args) => {
	message.channel.send( "Dungeon" )
}

exports.help = {
	name: "dungeon",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Dungeon",
	description: "-",
	usage: "dungeon",
	aliases: []
}