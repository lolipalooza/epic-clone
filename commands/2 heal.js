exports.run = async (client, message, args) => {
	message.channel.send( "Heal" )
}

exports.help = {
	name: "heal",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Heal",
	description: "-",
	usage: "heal",
	aliases: []
}