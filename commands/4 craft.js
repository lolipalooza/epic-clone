exports.run = async (client, message, args) => {
	message.channel.send( "Craft" )
}

exports.help = {
	name: "craft",
	category: ":tools: Working commands :tools:",
	category_order: 4,
	title: "Craft",
	description: "Used to craft swords, armors and items from `recipes`\n"
		+"**Note that you cannot carry more than one sword and one armor at once, so you have to sell your current one to craft another**",
	usage: "craft [item] [amount]",
	aliases: [],
	higher_tiers: "`forge`: Unlocked in area 11, used to upgrade swords and armors",
}