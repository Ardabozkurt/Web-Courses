// loops

// for loop
/*

for(let i=0; i<10; i++){

    if(i==3){
        console.log("en sevdiğim rakam: " + i);
        continue;
    }
    console.log(i);
}

console.log('111111111111111111111111111111111111111111111')

//while loop

for (let i=0; i<10; i++){
    console.log(i);
}
console.log('111111111111111111111111111111111111111111111')

let i=0;
while(i<10){
    console.log(i);
    i++;
}
console.log('111111111111111111111111111111111111111111111')

let a=0;
do{
    console.log(a);
    a++;
}while(a<10);
*/

//Loops in Array & Objects

let cars =['Bmw','Mercedes','Toyota'];
let people = [
    {firstName: 'Arda', lastName: 'Bozkurt'},
    {firstName: 'Utku', lastName: 'Bozkurt'},
    {firstName: 'Can', lastName: 'Gezer'},
];

console.log(cars[0]);

for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
}
console.log('SASASAS')
//for in

for(let i in cars){
    console.log(`index : ${i} value : ${cars[i]}`);
}

//foreach

cars.forEach(function(item){
    console.log(item);
})

//map

let val = people.map(function(item){
    return item.firstName + ' ' + item.lastName;
});

console.log(val);

let numbers = [1,5,6,8,10];

let num = numbers.map(function(n){
    return n*n;
});

console.log(num);