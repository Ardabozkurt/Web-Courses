//object literals

let val;

let person = {
    firstName : 'Arda',
    lastName : 'Bozkurt',
    age : 19,
    hobies : ['music','computer games', 'basketball'],
    address : {
        city : 'ankara',
        country : 'türkiye'
    },
    getBirthYear : function(){
        return 2021- this.age;
    }
};

val = person.firstName;
console.log(val);
val = person.lastName;
console.log(val);
val = person['firstName'];
console.log(val);
val = person.age;
console.log(val);
val = person.hobies;
console.log(val);
val = person.hobies[1];
console.log(val);
val = person.hobies.length;
console.log(val);
val = person.address;
console.log(val);
val = person.address.city;
console.log(val);
val = person.address['city'];
console.log(val);
val = person.getBirthYear();
console.log(val);
console.log('saaaaaaaaaaaaaaaaaaaaaa');

for(let i=0; i<people.length; i++){
    console.log(people[i]);
}


console.log(person);
console.log(typeof person);