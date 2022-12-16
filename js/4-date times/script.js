//date object

let d= new Date();
let birthday = new Date(1990, 1,5);

//set methods

d.setFullYear(2024);
d.setMonth(1);
d.setDate(20);
d.setHours(10);
d.setMinutes(20);
d.setSeconds(1);

//get methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d.getFullYear() - birthday.getFullYear());

console.log(d);
console.log(typeof d);

var val;

val = Math.random()*10;
console.log(val);
