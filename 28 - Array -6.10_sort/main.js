var list = [
1,11,2,3,17,34,18,23,45,41,9,82,8
];

var length = list.length-1;

for(var i=0; i<length; i++){
	for(var j=0; j<length; j++){
		if(list[j] > list[j+1]){
			[ list[j], list[j+1] ] = [list[j+1], list[j] ];
		}
	}
}
console.log(list);
