let val;
const a=10;
const b=5;
let c= 3;

//aritmetik operatörler

val = a+b;
val =a-b;
val =a*b;
val =a/b;
val = a%b;
val = c++; //yazdırdıktan sonra ekler
val = ++c; //ekleyip yazıdırır
val = --c;
val = c--;

//atama operatörleri

val = a;
val += a; //val =val +a
val -= a;
val *= a;
val /= a;
val %= a;

//karşılaştırma operatörleri

val = a==b;
val = a===b; //diğeriyle aynı sadece hem değer hem tip kontrolü yapıyor
val = 5 == '5'; //true
val = 5=== '5'; //false
val = a!=b ;
val = a !==b ;
val = a<b;
val = a<=b;

//mantıksal operatörler javadakilerle aynı

// && (And)

// || or

// ! not

console.log(val);
console.log(typeof val);