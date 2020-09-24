const Discord = require('discord.js')
const emoji = require('../functions/utils.js').emoji

exports.run = async (client, message, args) => {

}

exports.help = {
	name: "pets",
	title: "Pets",
	description: client => {
		return "Shows your pets\n"
			+"To unlock this command you need at least one pet, pets are found in `training` after the second `time travel`, earned in tier IX horse races or obtained in special events\n"
			+"It is possible to sort your pets by **tier**, **type** or **status** with [sort], and see other pages with [page] (it's possible to use both)"
	},
	usage: "pets [sort/page]",
	aliases: ['pet'],
	higher_tiers: "none",
	tiers: [{area:12, name:"time travel"}],
}