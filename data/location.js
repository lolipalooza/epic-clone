module.exports.cityImages = [
	"https://i.imgur.com/hRGWMXv.png",	// morning
	"https://i.imgur.com/eUAhXio.png",	// noon
	"https://i.imgur.com/1CNiblc.png",	// afternoon
	"https://i.imgur.com/TBPz7sw.png",	// night
]

module.exports.locations = {arr:[
	{ name: "Gimnasio",		url: "https://i.imgur.com/cgVOhx1.png",	actions: "entrenar|mirar" },
	{ name: "Universidad",	url: "https://i.imgur.com/12g5Shm.png",	actions: "estudiar|mirar" },
	{ name: "Oficinas",		url: "https://i.imgur.com/L0svzRe.png",	actions: "trabajar|mirar" },
	{ name: "Bar",			url: "https://i.imgur.com/v9pchh4.png",	actions: "beber|mirar" },
	{ name: "Hogar",		url: "https://i.imgur.com/Yq1PpCy.png",	actions: "dormir" },
	{ name: "Restaurant",	url: "https://i.imgur.com/TPAbtnT.png",	actions: "" },
	//{ name: "Disco",		url: "",	actions: "" },
	{ name: "Centro",		url: "https://i.imgur.com/ZGORvJD.png",	actions: "tienda|mirar" },
]}

module.exports.actions = "entrenar|estudiar|beber|dormir|mirar|tienda"

module.exports.locations.toArray = () => {
	let loc = module.exports.locations.arr
	let output = []
	for (let i=0; i<loc.length; i++)
		output.push(loc[i].name)
	return output
}

module.exports.locations.getParameter = (location, param) => {
	let arr = module.exports.locations.arr
	for (let i=0; i<arr.length; i++)
		if (arr[i].name.toLowerCase() == location.toLowerCase())
			return arr[i][param]
	return ""
}