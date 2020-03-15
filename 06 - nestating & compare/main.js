var personOne = "jamal";
var personTwo = "kamal";
var areTheyBrother = true;


//Way One
/*
if ("jamal" == personOne) {
	if ("kamal"==personTwo){
		if(areTheyBrother){
			console.log("jamal & kamal are Brother");
		} else{
			console.log("They are not Brother");
		}
	}
}
*/


//way Two
if ("jamal"==personOne&&"kamal"==personTwo&&areTheyBrother){
	console.log("They are Brother");
} else{
	console.log("they are not Brother");
}


// 2 3 5 7

var n = 8;

if (n < 10){
	if ( 2 == n || 3 == n || 5 == n || 7 == n){
		console.log("This number",n,"is smaller then 10 and it's a prime number");
	} else {
		console.log("This number",n,"is smaller then 10 and it's Not a prime number");
	}
} else {
		console.log("This number",n,"is greater then 10");
}