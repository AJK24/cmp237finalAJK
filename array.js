//Andrew Klump
//CMP237
//Javascript 101
//array.js


var weightclass = "[\n  " + [
	'{"name": "John", "Weight": 131}',
	'{"name": "Jake", "Weight": 250}',
	'{"name": "Patrick", "Weight": 186}',
	'{"name": "Caleb", "Weight": 345}',

].join(",\n  ") + "\n]";




function lowEnough(){
	if(Weight < 200){
		return name;
	}
}


function filter(array, test) {
	  var passed = [];
	    for (var i = 0; i < array.length; i++) {
		        if (test(array[i]))
				      passed.push(array[i]);
			  }
	      return passed;
}

// This finds people who were under the 200 pound weight class
console.log(JSON.stringify(filter(weightclass, function(item) {
   return item.weight < 200 ;
})));







//var filtered = weightclass.filter(lowEnough);

//console.log(filtered);
