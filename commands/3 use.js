exports.run = async (client, message, args) => {
	if (args.length>0) {
		message.channel.send( ""+message.author.toString()+", what are you trying to use? check the name of the item again" )
	} else {
		message.channel.send( ""+message.author.toString()+", the correct usage of this command is `"+CONFIG_PREFIX+"use [item]`" )
	}
}

exports.help = {
	name: "use",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Use",
	description: "Used to use a consumable item from your inventory (life potion can alo be used by `heal`)",
	usage: "use [item]",
	aliases: [],
	higher_tiers: "none",
}