// Positive Nagative check
var number = -2;
if (number>0){
	var result ="This number  "+number+"  is Positive"
}else{
	var result ="this number  "+number+"  is Nagative"
}

console.log(result);

// even or odd

var n = 13;
var result;

var remainder = n % 2;

if ( 0 == remainder){
	result = "this number is even";
} else {
	result = "this number is odd"	
}

console.log(result);

// movie Rating
var movieRating = "pg";
var age = 12;



if("pg"==movieRating && age>=13){
	console.log("You can watch this movie");
}else if("r"==movieRating && age>=18){
	console.log("You can watch this movie");
}else if("g"==movieRating){
	console.log("you can watch this movie");
} else {
	console.log("You Can't watch this movie");
}



if(("pg"==movieRating && age>=13) || ("r"==movieRating && age>=18) || ("g"==movieRating)){
	console.log("you can watch this movie");
}else{
	console.log("You Can't watch this movie");
}

// Age check

var yourAge = 18;
var result;
if (yourAge<0 || yourAge>200){
	result = "vampire";
}else if (yourAge <=1){
	result = "baby";
}else if (yourAge<=3){
	result = "toddler";
}else if (yourAge<=12){
	result ="kid";
}else if (yourAge<18){
	result ="teenager";
}else if (yourAge<=18){
	result ="adult";
}

console.log("you are a",result);