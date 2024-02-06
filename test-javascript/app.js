//lets use loadash

const q = require('lodash');
const numbers = [1,2,3,4,5];

const  doubledNumbers = q.map(numbers,n=> n*2);

console.log('original numbers:',numbers);
console.log('double number:', doubledNumbers);

// here we are importing another package 
const a = require('./add.js')
let p = a.add(2,4);
console.log(p);

//
const b = require('./own.js')
let name = b.greet("rajesh");
console.log(name);


