//Andrew Klump
//CMP237
//JAvascript 101
//date.js 5.
//


var currentdate = new Date(); 

var futuredate = new Date();
futuredate.setDate(currentdate.getDate());
//futuredate.setDate(currentdate.getDate());
//add 30 days or a month
futuredate.setMonth(futuredate.getMonth()+1);


//print a the original date
console.log(currentdate);

//print date with 30 days added to it
console.log(futuredate);
