const Discord = require("discord.js")
const fs = require('fs')

const unirest = require("unirest");


exports.run = async(client, message, args, level) => {
	
	// https://rapidapi.com/simsimi/api/simsimi-conversation/pricing
	var req = unirest("GET", "https://simsimi.p.rapidapi.com/request.p");

	req.query({
		"ft": "0.0",
		"text": "hi",
		"lc": "en"
	});

	req.headers({
		"x-rapidapi-host": "simsimi.p.rapidapi.com",
		"x-rapidapi-key": "52a24bd6eamshfc83d504a66a3f7p1b7e64jsn4bf541ce0aad"
	});
	
	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		console.log(res.body);
	});
}

exports.help = {
  name: "trabajar",
  category: "Juegos",
  description: "En desarrollo... ||nunca será terminada esta weá :v||",
  usage: "trabajar",
  aliases: {}
}