const data = require('../utils/data')

module.exports.init = message => {
	
	let d = data.get(message.author.discriminator)
	let response = ""
	
	if (!d || /^sd.iniciar s$/i.test(message.content)) {
		d = {
			name: message.author.username,
			id: message.author.id,
			stats: {
				energy: 100,
				max_energy: 100,
				charm: 0,
				intelligence: 0,
				strength: 0,
				fat: 0,
				location: "Hogar",
				money: 10,
			}
		}
		
		data.store(message.author.discriminator, d)
		
		response += ":love_hotel: Bienvenido(a) `" + message.author.username + "`!\n\n"
		response += "Haz iniciado una nueva partida en :wine_glass: ***SimDate™ para Discord***\n\n"
		response += "Tu objetivo es explorar la ciudad, fortalecer tus stats, conocer y ligar con chicas :high_heel:\n"
		response += "¡Que te diviertas!"
	} else {
		response += "`" + message.author.username + "` ya tienes datos salvados en ***SimDate™ para Discord***\n"
		response += "Si estás seguro(a) de que deseas reiniciar, ingresa `sd.iniciar s`.\n"
	}
	
	message.channel.send( response )
}