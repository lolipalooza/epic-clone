exports.run = async (client, message, args) => {
	message.channel.send( "Miniboss" )
}

exports.help = {
	name: "miniboss",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Miniboss",
	description: "-",
	usage: "miniboss",
	aliases: []
}