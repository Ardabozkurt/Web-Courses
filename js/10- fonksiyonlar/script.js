// functions

function yasHesapla(dogumYili){
    return 2021 -dogumYili;
}

let ageArda = yasHesapla(2002);
console.log(ageArda);

function EmekligeKacYilKaldı(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı.`);
    }else{
        console.log('Emeklilik yaşınız geçmiş!');
    }
}

EmekligeKacYilKaldı(2002,'Arda');

function sum(a,b){
    var c = a+b;
    return c;
}

console.log(sum(10,20));

//function expressions

// ES6 Deafult Parameters
const sum1 = function(c=0,d=0){

    /*
    if(typeof c === 'undefined'){
        c=0;
    }
    if(typeof d === 'undefined'){
        d=0;
    }
    */

    var l = c+d;
    return l;
}


console.log(sum1(10,30));
console.log(sum1(10,30,40));
console.log(sum1(10));

function args(){
    console.log(arguments);

}

args(10,20,30);

function sumAll(){
    var total = 0;

    for(let i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

console.log(sumAll(10,20,30,40,50));
