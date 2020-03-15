//s1 = 1 2 3 4 5 6 7 8 9........
//s2 = 1 4 6 8 10 12 14.........*2
//s3 = 1 4 7 10 13 16...........+3
//s4 = 0 3 8 15 24 35 48........squre then -1
//s5 = 1 4 3 8 5 12 7 16 9 20...1, 2*2 ,3, 4*2, 5, 6*2
//s6 = 0 1 1 2 3 5 8 13.........fast two digite +  called Fibonacci


//s1 = 1 2 3 4 5 6 7 8 9........

var series ="";
var n;
for (var i=1;i<10;i++){
	n =i*2;
	series = series + n + " ";
}
console.log("Series 1=", series);

//s3 = 1 4 7 10 13 16...........+3

series ="1 ";
n = 1;
for (var i=1;i<10;i++){
	n =n+3;
	series = series + n + " ";
}
console.log("Series 2=", series);


//s4 = 0 3 8 15 24 35 48........squre then -1
series ="";
for (var i=1;i<10;i++){
	n =i*i-1;
	series = series + n + " ";
}
console.log("Series 3=", series);


series ="";
for (var i=1;i<10;i++){
	n =i;
	if( n%2==0){
		n=i*2;
	}
	series=series+n+" ";
}
console.log("Series 2=", series);
//s5 = 1 4 3 8 5 12 7 16 9 20...1, 2*2 ,3, 4*2, 5, 6*2
series ="";
for (var i=1;i<10;i++){
	n =i;
	if( n%2==0){
		n=i*2;
	}
	series=series+n+" ";
}
console.log("Series 2=", series);


//s6 = 0 1 1 2 3 5 8 13.........fast two digite +  called Fibonacci

series ="0 1 ";
  n = 0;
  var x = 0;
  var y = 1;

  for(var i=1; i<10; i++){
  	n = x + y;
  	x = y;
  	y = n;

  	series = series+n+" ";
  } console.log("Fibonacci Series",series)