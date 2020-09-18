exports.run = async (client, message, args) => {
	message.channel.send( "Hunt" )
}

exports.help = {
	name: "hunt",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Hunt",
	description: "-",
	usage: "hunt",
	aliases: []
}