module.exports.rand = (min,max) => {
    return Math.floor((Math.random() * (max-min+1)) + min)
}

// Debugging only
module.exports.getMinsMaxs = (min, max) => {
	var _min = (max-min)/2,
		_max = (max-min)/2;
	for(var i=0; i<500; i++){
		var _rand = rand (min, max)
		_min = (_rand<_min)?_rand:_min
		_max = (_rand>_max)?_rand:_max
	}
	console.log({min:_min,max:_max})
}

module.exports.parseExpressions = (string) => {
	/*
	// parse the expression "rand(min,max)"
	let numbers = string.replace(/.*?rand\s*?\(\s*?(\d+)\s*?,\s*?(\d+)\s*?\).*?/i, "$1,$2")
	let _rand = rand( parseInt(numbers.split(",")[0]), parseInt(numbers.split(",")[1]) )
	string = string.replace(/rand\s*?\(\s*?(\d+)\s*?,\s*?(\d+)\s*?\)/i, _rand)
	*/
	
	// If the string match any of the regexps here, then use eval(<match>) on those matches
	let expressions = [
		// Regexp											Expression to parse
		String.raw`rand\s*?\(\s*?\d+\s*?,\s*?\d+\s*?\)`,	// rand(min,max)
		String.raw`\[[\w\s,']+\]\[.+?\]`,					// rand(min,max)
	]
	
	for (let i=0; i<expressions.length; i++)
	{
		let expr = string.match( new RegExp(expressions[i]) )[0]		// get only the isolated desired expression to parse
		expr = eval(expr)												// parsing the expression
		string = string.replace( new RegExp(expressions[i]), expr )		// replacing the expression with the parsed one
	}
	
	return string
}