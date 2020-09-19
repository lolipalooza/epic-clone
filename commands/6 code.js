exports.run = async (client, message, args) => {
	message.channel.send( "Code" )
}

exports.help = {
	name: "code",
	category: ":gem: More rewards :gem:",
	category_order: 6,
	title: "Code",
	description: "Used to claim rewards\nCodes are usually announced in the Official server of EPIC RPG",
	usage: "code [code]",
	aliases: [],
	higher_tiers: "none",
}