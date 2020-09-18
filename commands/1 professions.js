exports.run = async (client, message, args) => {
	message.channel.send( "Professions" )
}

exports.help = {
	name: "professions",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Professions",
	description: "-",
	usage: "professions",
	aliases: [ 'pr' ]
}