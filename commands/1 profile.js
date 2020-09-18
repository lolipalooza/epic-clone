exports.run = async (client, message, args) => {
	message.channel.send( "Profile" )
}

exports.help = {
	name: "profile",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Profile",
	description: "Shows your profile\n"
		+ "Profiles can have backgrounds which can be obtained in `epic shop` and during special events\n"
		+ "The **RANK** displayed in this command depends on time travels, area and level. This **RANK** is updated every hour",
	usage: "profile [@player]",
	aliases: [ 'p' ],
	higher_tiers: "none"
}