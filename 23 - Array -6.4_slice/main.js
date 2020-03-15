
// Slice
var List = [
"sun",
"mon",
"tue",
"wed",
"thu",
"fri",
"sat",

];

var Chunk = List.slice(4,6);

console.log(Chunk);


// Splice
var list = [
"sun",
"mon",
"tue",
"wed",
"thu",
"fri",
"sat",

];

var chunk = list.splice(-5,3);

console.log(list,chunk);