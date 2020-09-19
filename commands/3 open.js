exports.run = async (client, message, args) => {
	message.channel.send( "Open" )
}

exports.help = {
	name: "open",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Open",
	description: "Used to open a `lootbox`\n"
		+"Lootboxes are dropped from `hunt` and `adventure`, or bought in the `shop`, more info with `lootbox`!",
	usage: "open",
	aliases: [],
	higher_tiers: "none",
}