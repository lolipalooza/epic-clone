exports.run = async (client, message, args) => {
	message.channel.send( "Duel" )
}

exports.help = {
	name: "duel",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Duel",
	description: "-",
	usage: "duel",
	aliases: []
}