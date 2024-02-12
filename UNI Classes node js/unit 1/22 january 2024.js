//--------------------function----------------------//

// const multiply = function(a,b) {
//     return a*b;
// };
//Invocation
// const product = multiply(4,6);
// console.log("function expression - product:",product);







//------------- Arrow function --------------------//

// there is no function keyword included 
// if single statement no need to define curly bracket

// const subtract = (a,b) => a - b;
// //invocation
// const difference = subtract(8,3);
// console.log("arrow function - difference:", difference);






//----------- Anonymous function ------------------//







//--------------- Error handling -----------------//
// easy way - try catch 
// agar pura code hi try block me dal denge toh error aayega hi nhi - hahaa never do this
// error will be handled in catch block 

// try {
//     //code that may throw an error
//     throw new Error("An error");
// }
// catch (Error){
//     //code to handle the error
//     console.error(Error.message);
// }
// finally {
//     //code that will run regardless of whether there was an error
//     console.log("Cleanup code");
// }






//------------------ Timers -------------------//

// ----- setTimeout function ------

//executes a function or a piece of code once after a specified delay

// const delayedFunction = () => {
//     console.log("Delayed function executed!");
// };

// setTimeout(delayedFunction,5000); // executes after 5 seconds



// ----- setInterval function ------
//executes a function repeatedly at a specified interval

// const repeatedFunction = () => {
//     console.log("Repeated function executed!");
// };

// const intervalId = setInterval(repeatedFunction,1000);

// ------- clear Interval -----------

// in case we want to stop this repeated function after certain specific time 

// setTimeout( () => {
//     clearInterval(intervalId); // stop the interval
//     console.log("Interval stopped. ");
// }, 10000);










// ------------ call back --------------//
//                    |
//                   / \
//                  /   \
//          synchronus  Asynchronous 

// synchronnus
// function parentFunction(name,callback){
//     callback();
//     console.log("Hey "+name);
// }

// function randomFunction(){
//     console.log("hey i am callback function");
// }
// parentFunction ("random strings", randomFunction);






//asynchronous callback function 

// function parentFunction(name,callback){
//     setTimeout(callback,1000); // setTimeout is itself synchronous - but the thing we  put inside setTimeout makes it asynchronous 
//     console.log("Hey "+name);
// }

// function randomFunction(){
//     console.log("hey i am callback function");
// }
// parentFunction ("random strings", randomFunction);

// write this code in anonymous function ??

// function parentFunction(name, callback){
//     setTimeout(callback,1000);
//     console.log("Hey",name);
// } 

// parentFunction("random String", function(){       // this is anonymous function
//     console.log("Hey i am a callback function");
// });

// make this code more shorter ? yes with the help of arrow function
// const parentFunction=(name,callback)=>{
//     setTimeout(callback,1000);
//     console.log("hey"+name);
// }
// parentFunction("random String", function(){       // this is anonymous function
// console.log("Hey i am a callback function");
// });





























