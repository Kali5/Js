function sayHi(name) {
	if (name){
		console.log("hello "+name);
	}else{
		console.log("How are you");
	}
}


sayHi("Rami");
sayHi("Rahim");
sayHi("Karim");
sayHi('');
sayHi();


function isEven(number){
	if(number % 2 == 0){
		return true;
	}
	return false;
}

console.log(isEven(12));
console.log(isEven(89855));
console.log(isEven(455654));
console.log(isEven(512021));
console.log(isEven(6));