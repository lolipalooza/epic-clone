const rand = require('../utils/utils').rand
const waifus = require('../data/waifus')

const classesObj = {
	student: "universidad|centro",
	unnatural: "centro|bar",
	sports: "gimnasio|centro",
	worker: "oficinas|bar|centro|disco",
}

module.exports.buildDay = (classes) => {
	let arr = buildPlacesArray(classes.split(" "))
	let totalHours = 0, schedule = []
	do {
		let hours = rand(1,5)
		let place = arr[rand(0,arr.length-1)]
		for(let i=0; i<hours; i++) {
			if (totalHours < 24) {
				schedule.push( rand(0,9)?"none":place )
				totalHours = schedule.length
			}
		}
	} while (totalHours < 24)
	return schedule
}

var buildPlacesArray = classesArr => {
	let output = []
	for (let i=0; i<classesArr.length; i++) {
		let arr = classesObj[classesArr[i]] ? classesObj[classesArr[i]].split("|") : []
		output = output.concat(Array.prototype.slice.call( arr ))
	}
	return output.filter(function(item, pos) {
		return output.indexOf(item) == pos;
	})
}

// Chosing (number) unique girls
var getGirls = number => {
	let girls = []
	
	if (waifus.length > number) 
		for (let i=0; i<number; i++) {
			let id
			do { id = rand[0, waifus.length] } while ( girls.includes(id) )
			girls[i] = id
		}
	else
		for (let i=0; i<waifus.length; i++)
			girls.push(i)
	return girls
}

module.exports.build = () => {
	for (let i=0; i<waifus.length; i++) {
		waifus[i].schedules = []
		
		for (let j=0; j<7; j++) {
			
			// Building day schedule
			let girls = getGirls(5)
			if (girls.includes(i))
				waifus[i].schedules.push( module.exports.buildDay(waifus[i].classes) )
			else
				waifus[i].schedules.push( module.exports.buildDay("") )
		}
	}
	let d = new Date()
	module.exports.date = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear()
}

module.exports.update = () => {
	let d = new Date()
	let currentDate = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear()
	if (module.exports.date != currentDate) {
		for (let i=0; i<waifus.length; i++) {
			let girls = getGirls(5)
			
			// removing schedules[0]
			waifus[i].schedules.shift()
			
			// insert new schedule in last position schedules[6]
			if (girls.includes(i))
				waifus[i].schedules.push( module.exports.buildDay(waifus[i].classes) )
			else
				waifus[i].schedules.push( module.exports.buildDay("") )
		}
		module.exports.date = currentDate
	}
}

module.exports.checkAvailableWaifus = place => {
	module.exports.update()
	let availableGirlsIds = []
	for (let i=0; i<waifus.length; i++)
		if (waifus[i].schedules[0][new Date().getHours()].toLowerCase() == place.toLowerCase())
			availableGirlsIds.push(i)
	return availableGirlsIds
}