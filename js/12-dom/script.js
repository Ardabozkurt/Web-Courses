let val;

val = window.document;
val = document.all.length;

console.log(val);

//selecting elements

// *** single elements

val = document.getElementById('header');
val  = document.getElementById('header').id;
//val = document.getElementById('header').className;
val  = document.getElementById('header');
//val = val.id;
//val = val.className;

val.style.fontSize = '45px';
val.style.color = 'red';
val.style.fontWeight = 'bold';
//val.style.display = 'none';

document.getElementById('header').innerText = '<b>my ToDo App </b>';
document.getElementById('header').innerHTML = '<b>my ToDo App </b>';
console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
document.querySelector('#header').classList.add('active');

console.log(val);

// *** multiple elements