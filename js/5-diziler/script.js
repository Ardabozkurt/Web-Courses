//arrays

let names= ['çınar','sena','ada','yiğit',['bebe','büyük']];
let years = [2018, 1998, 2000, 2001]

console.log(names);
console.log(names[4][0]);
console.log(typeof names);
names.push("arda");//listenin sonuna ekler
names.unshift('arda');//listenin başına ekler
console.log(names);
names.pop();//sonuncuyu siler ya da girilen değeri siler
names.shift();//ilkini siler
names.includes('arda');

let index= names.indexOf('ada');
console.log(index);

//reverse
names.reverse();

//sort
names.sort();

//concat
names.concat()//listeleri bilerştirme

//splice
names.splice(2,0,'seda')//ilki başlama sırası ikincisi silinmesi gereken eleman sayısı üçüncüsü eklemek istediğin eleman

//find
function over18(year){
    let age= 2021-year;
    return age>=18;
}
let val = years.find(over18);
console.log(val);

//filter
let vals = years.filter(over18);
console.log(vals);
