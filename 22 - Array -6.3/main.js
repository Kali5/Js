var male =["Karim","Rahim","Shamim","Rahima"];
var female =["Shamima","Karima"];

var personToRemove = male[3];
female.push(personToRemove);

delete(male[3]);

console.log(male,female);
console.log(male.length,female.length);