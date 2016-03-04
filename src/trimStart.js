module.exports = function(originalString, stringToTrim) {
	for(var i = 0; i < originalString.length; i++) {
		if(stringToTrim[i] === undefined) {
			return originalString.slice(i);
		}
		if(originalString[i] !== stringToTrim[i]) {
			return originalString;
		}
	}
}