//------------------working with loops--------------------
//--------------------- for loop ------------------------ 
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }
// what if we have to print 0,1,2,3,4 in single line ?????

// difference b/w while and for loop
// when we are not sure about no. of iteration ----> use While loop
// when we sure about no. of iteration         ----> use for loop






//-------------------- do while loop -----------------------
// its anther name is exit control 
// it surely execute one time before checkig the condition

// let count = 0;
// do{
//     console.log(count);
//     count++;
// }
// while(count < 5);





//------------------ for...in loop --------------------------:
//iterates over properties of an object

// let person = {name:"ram",age:"30",occupation:"developer"};
// for(let key in person){
//     console.log(key + ": "+person[key]);
// }






//--------------- how to define objects ? -------------------:
//object literal notation

// let car = {
//     make:'toyota',
//     model:'camry',
//     year:2020,
//     start: function(){                 // this is a method
//         console.log("Engine Started!");
//     }
// }
// //accessing properties 
// console.log(car.make);

// //calling a method
// car.start();






//---------------object constructor------------------------:
// function Book(title,author,year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// //creating instances of the object
// let book1 = new Book("the catcher in the Rye","J.D. Salinger",1951);
// let book2 = new Book("the story of fire and ice","d.g angelina",1961);

// console.log(book1);
// console.log(book2);





//array me index of seekho 
let fruits = ["apple","banana","orange","grape"];
let indexOfOrange = fruits.indexOf("orange");
console.log(indexOfOrange);

//iterating
for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// slicing an array
let citrus = fruits.slice(1,3);
console.log(citrus);

//splicing an array (modifying original array)
let removed = fruits.splice(1,2,"pear","melon");
console.log(fruits);

//concatening arrays
let moreFruits = ["grapefruit","pineapple"];
let allFruits = fruits.concat(moreFruits);

















