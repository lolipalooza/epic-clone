module.exports = message => {
	
	let text = ""
	text += "Bienvenidos a ***SimDate™ para Discord***"
	text += "```SimDate™ v1.0.0 - Listado de Comandos```"
	text += "De momento no tenemos ningun comando para mostrar.\n"
	text += "Esta aplicación apenas se encuentra en una fase inicial de desarrollo. "
	text += "Pero manténganse en sintonía para futuras actualizaciones.\n\n"
	text += "Y no olvide donarnos a nuestro Patreon:\n"
	text += "https://www.patreon.com/LolipaloozaStudio"
	
	message.channel.send( text )
}