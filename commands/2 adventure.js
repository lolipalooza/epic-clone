exports.run = async (client, message, args) => {
	message.channel.send( "Adventure" )
}

exports.help = {
	name: "adventure",
	category: ":dagger: Fighting commands :dagger:",
	category_order: 2,
	title: "Adventure",
	description: "-",
	usage: "adventure",
	aliases: [ 'adv' ]
}