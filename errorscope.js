//Andrew Klump
//CMP237
//Javascript101
//errorscope.js

var outsider = 0;

function scoper(){
	
	var insider = 100;
	insider++;
	console.log(insider); //Print from inside since it is local
	var x = 25;
	outsider += 1;
	return x;

}

try{
	console.log(outsider);
	//uncommented insider to test error
	console.log(insider); //  CANNOT PRINt FROM HERE OUT OF SCOPE
	scoper();
	console.log(outsider); //can print outsider because it is a global variable
	////console.log(x); Cannot print x becaue it is out of scope
	var tester = scoper();	// can return x to an outside variable to print it
	console.log(tester);	

}

catch(error){
	console.log("You're an idiot",error);


}
