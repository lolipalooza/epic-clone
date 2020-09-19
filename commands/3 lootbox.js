exports.run = async (client, message, args) => {
	message.channel.send( "Lootbox" )
}

exports.help = {
	name: "lootbox",
	category: ":moneybag: Economy commands :moneybag:",
	category_order: 3,
	title: "Lootbox",
	description: "Shows detailed information about lootboxes, you can open a lootbox with `open` or `use`\n"
		+"Lootboxes are possible to drop in `hunt` and `adventure` or buy in the `shop` (cooldown of 3 hours)\n"
		+"**Note that you can't carry more than one lootbox at once!** So you cannot drop a lootbox if you have one in your `inventory`!\n"
		+"",
	usage: "lootbox",
	aliases: ['lb'],
	higher_tiers: "none",
}