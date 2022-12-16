console.log("merhaba");
console.log(12345);
console.log(true);
console.log([1,2,3]);
console.error("hata");
console.warn("bir uyarı oluştu");

// tek satırlık yorum satırı

/*
yorum satırları
asdasd
asd
*/

// console.clear();

//Değişkenler

var age;
console.log(age);

age=20;
console.log(age);

var fullname = "Arda Bozkurt";
console.log(fullname);

fullname="utku bozkurt";
console.log(fullname);

//Değişken tanımlama kuralları

//Sayısal ifade ile başlayamaz

var age1;

var _age2;
var $age3;

//komut isimleri ile tanımlama yapılamaz
//birden fazla kelime içeriyorsa

var ad_soyad = "arda bozkurt";

//case sensitive (büyük küçük duyarlılığı)

var firstName="arda";
var FirstName = "utku";

//var, let, const

let city="ankara";
console.log(city);

const email="abc@gmail.com";
console.log(email);

//const değişmiyor
    //email="bcd@gmail.com";
    //console.log(email);

//değişken tipleri

//primitive type

    //string
    let ilkad="arda";
    console.log(typeof ilkad);

    //number
    let yaş=20;
    let money= 100.5;
    console.log("------------")
    console.log(typeof yaş);
    console.log(typeof money);

    //boolean
    let isActive= true;
    console.log(typeof isActive);

    //null
    let job = null;
    console.log(typeof job);

    //undefined
    let car;
    console.log(car);

//reference type -object

    //array
    let names=['Ali','Ahmet','Can'];
    console.log(typeof names);

    //object
    let address= {
        city:'Adana',
        country:'Turkiye'
    }
    console.log(typeof address);

    //function
    var calculateAge = function(){
        return 0;
    }
    console.log(typeof calculateAge);