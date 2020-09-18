exports.run = async (client, message, args) => {
	message.channel.send( "Arena" )
}

exports.help = {
	name: "arena",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Arena",
	description: "-",
	usage: "arena",
	aliases: []
}