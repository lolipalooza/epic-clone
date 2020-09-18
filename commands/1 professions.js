exports.run = async (client, message, args) => {
	message.channel.send( "Professions" )
}

exports.help = {
	name: "professions",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Professions",
	description: "Shows the progress of your professions\nGet info about a specific professions with `professions [profession]`",
	usage: "professions",
	aliases: [ 'profession', 'pr' ],
	higher_tiers: "none",
}