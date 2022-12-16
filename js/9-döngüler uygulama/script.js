
var hak = 5;
var tahmin,sayac=0;
var sayi = Math.floor((Math.random()*10)+1);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz'));

    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz!`);
        console.log(`puan :  ${100 - (20)*(sayac-1)}`);
        break;
    }else if (sayi>tahmin){
        console.log('daha yüksek');
    }else{
        console.log('daha düşük');
    }

    if(hak == 0){
        console.log('hakkınız bitti. sayı: '+ sayi);
    }
}