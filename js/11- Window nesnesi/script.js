// window object

let val;
var a = 10;
function abc(){
    return  0;
};

val = window;
/*
// alert
alert('Merhaba');

//prompt

var b = prompt('bir sayı girin = ');
*/

//comfirm

//var confirm = confirm('emin misiniz?');

//scroll 
//val = window.scrollX;

//location

val = window.location;
val = window.location.href;
val = window.location.hostname;
val = window.location.host;
val = window.location.protocol;
val = window.location.search;

//window.location.href = 'http://ardabozkurt.com';
//window.location.reload();

console.log(val);

//scopes

// global scopes

var name = 'arda';
var age = 25;
function logName(){
    var name = 'ada';
    var age = 12;
    console.log('function scope ',name, age);
}
//console.log(age); işe yaramaz

if(true){
    var age = 30;
    console.log('block scope ',name, age);
}
console.log(age);

logName();
console.log(name);
console.log(window);



//local scopes

// fonksiyonlar kendi scopelarını oluiturur.
// **blocklar yeni scope oluşturmaz.
//ES6 ile gelen let ve const block scope oluşturur.

console.log('********************');

if(true){
    var model = 'opel';
    let year = 2016;
    const color = 'white';
    console.log('block scope',model,year,color);
}
console.log(model);
//let ve const işe yaramaz
//console.log(year); 
//console.log(color);
//console.log('block scope',model,year,color); işe yaramaz

var i = 1;

for(var i=0; i<10; i++){
    console.log('i',i);
}
console.log(i);

//aradaki farka bak

var a = 1;

for(let a=0; a<10; a++){
    console.log('a',a);
}
console.log(a);