// if/else statements

const firstName="Sena";
const age = 19;
const isStudent = true;
const school = 'university';

if(firstName== 'Sena'){
    console.log('Merhaba Sena');
}

if(age == 19){
    console.log('Yaşınız 19');
}

if(isStudent == false){
    console.log('Merhaba öğrenci');
}else{
    console.log('Merhaba işler nasıl?')
}

if(age >=18){

    if((school == 'university') || (school=='highschool')) {
        console.log('Ehliyet alabilirsiniz');
    }else{
        console.log('Eğitim durumunuz yetersiz');
    }

    
}else{
    console.log('Ehliyet alamazsınız');
}

if(age > 0 && age < 12){
    console.log('sa');
    console.log(`${firstName} is a child`);
}else if(age >=13 && age <=18){
    console.log(`${firstName} is a teenager`);
}else{
    console.log(`${firstName} is an adult`);
}

if(typeof id != 'undefined'){
    console.log('id: '+ id);
}else{
    console.log('no id');
}

//switch statements
let category = 'telefon';

switch(category){
    case'telefon':
        console.log('telefon');
    break;

    case 'bilgisayar':
        console.log('bilgisayar');
    break;

    default:
        console.log('yanlış kategori');
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'pazar';
    break;

    case 1:
        day = 'pazartesi';
    break;

    case 2:
        day = 'salı';
    break;

    case 3:
        day = 'çarşamba';
    break;

    case 4:
        day = 'perşembe';
    break;

    case 5:
        day = 'cuma';
    break;

    case 6:
        day = 'cumartesi';
    break;
}

console.log(`bugün günlerden ${day}`);