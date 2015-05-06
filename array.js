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
		      //console.log(array[i]);
		  	  if (test(array[i])){
			//	console.log(array[i]);	     
			       	passed.push(array[i]);
			  }
	    }
	      return passed;
}

var rightclass = JSON.parse(weightclass);
// This finds people who were under the 200 pound weight class
console.log(JSON.stringify(filter(rightclass, function(item) {
   return item.Weight < 200 ;
})));







//var filtered = weightclass.filter(lowEnough);

//console.log(filtered);
