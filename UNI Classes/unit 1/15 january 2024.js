// const constantVar = "i am constant";
// if(true){
//     console.log(constantVar);
// }






//--------------------- scope of variables -----------------:
//  !!!!!! concept is not clear 

// function exampleFunction(){
//     if(true){
//         var functionScopedVar = "I am function-scoped";
//         let blockScopedLet = "i am block scoped";
//         const blockScopedConst = "i ma constant and block scoped";

//     }
//     console.log(functionScopedVar);
//     console.log(functionScopedLet);
//     console.log(functionScopedConst);
// }






// ---------------- shadowing -------------------

// local variables can shadow global variables with the same name.
// the local variable takes precedenace within its scope.

// var shadowedVar = " iamglobal";
// function exampleFunction(){
//     var shadowedVar = "iamlocal";
//     console.log(shadowedVar); // i am local
// }
// console.log(shadowedVar); // i am global





//------------------- hoisting ----------------------------:

// console.log(x); //undefined
// var x = 5; // observe the type of error by writing let also .. imp.
// console.log(x); //5  

//only var ke sath ye cheej ho skti hai .
//let ke sath ye cheej nhi ho skti 





//-------------hoisting with function -------------------:
// hello();
// function hello(){
//     console.log("jai shree ram");
// }






//-------------- data types in javascript------------------- :
// let name = "john"; // string
//let age = 25 ;//no. or float





//--------------------object data type----------------------- 
// a collection of key value pairs .
// keys are strings and values can be of any data type , including other objects 

// let  person = {
//     names: "alok",
//     age: 30,
//     isStudent: false    // last me comma nhi lagate
// };
// console.log(person.names);




//-------------------------array-----------------------:

// let fruits = [1,"banana","orange"];
// console.log(fruits[0]);





//-----------------------function----------------------:

// function add(a,b) {
//     return a+b;
// }
// var a = add(2,3);
// console.log(a);

//-------------------dynamic typing -------------------:




//----------------- typeof operator -------------------:

// let exampleVar = "Hello";
// console.log(typeof(exampleVar)); 






//----------------- type coercion ---------------------:
//when operars are used with different data types . values are automatically converted to a common type during operation

// let result = 5+"5"; // can u try with a minus (-) ? funny ?
// console.log(result);

// let resultM = 5-"5"; // with minus ... wait ? what ?
// console.log(resultM); // weird behaviour of javascript ....//

// let resultMU = 5*"5"; // with minus ... wait ? what ?
// console.log(resultMU);

//language must be strict so that these type of thing could not happen 






//---------------------- working with operators---------------:
//1. Arithmetic Operators:
// let x = 5;
// let y = 2;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y); 



//2. Comparison operator
// let x = 5;
// let y = 2;
// console.log(x=y);
// console.log(x===y);
// console.log(x!=y);
// console.log(x>y);
// console.log(x<y); 



//3.Logical operator
//combine or manipulate Boolean values.

// let p = true;
// let q = false;

// console.log(p && q); // Logical AND: false
// console.log(p || q); //Logical OR: true
// console.log(!p); //Logical NOT: false



//4.assignment operators
//assign value to varaibles 

// let num = 10;
// num+=5;
// num-=3;
// num*=2;
// num/=4;
// console.log(num);
































