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



var filtered = weightclass.filter(lowEnough);

console.log(filtered);
