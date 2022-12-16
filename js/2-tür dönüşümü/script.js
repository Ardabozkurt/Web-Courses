let num1 = Number('5');
let num2 = Number('10');

//let num1 = '5';
//let num2 = '10';
let total = num1+num2;

console.log(typeof total);
console.log(total);

let val;

//number to string

val = String(10);
console.log(typeof val);
console.log(val);
console.log(val.length);

// bool to string

val = String(true);
console.log('----------')
console.log(true);
console.log(typeof val);
console.log(val);
console.log(val.length);

val = new Date();

console.log(typeof val);

//date to string

val = String(new Date());
console.log("-------------")
console.log(val);
console.log(typeof val);

//array to string

val = String([1,2,3,4]);

console.log(val);

//toString

val = (10).toString();
console.log(val);

//string to number

val =Number('10');
val =Number(true);
console.log('-----------')

console.log(typeof val);
console.log(val);
console.log(val.toFixed(2));
console.log(val.length);

//parseInt
//parseFloat

val =parseInt('10');

console.log(typeof val);
console.log(val);
val = parseFloat('10.5');
console.log(typeof val);
console.log(val);