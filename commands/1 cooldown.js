exports.run = async (client, message, args) => {
	message.channel.send( "Cooldown" )
}

exports.help = {
	name: "cooldown",
	category: ":medal: Statistics commands :medal:",
	category_order: 1,
	title: "Cd",
	description: "Shows your cooldowns, there will be a :white_check_mark: if you can use the command\n"
				+"Use `rpg rd` to see only the ready commands",
	usage: "cooldown",
	aliases: [ 'cd' ],
	higher_tiers: "none",
}