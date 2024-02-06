// function language() {
//     let first = 'HTML',
//         second = 'CSS',
//         third = 'JAVASCRIPT'
//         return{
//             first,
//             second,
//             third,
//         };
// }
// let {first,second,third} = language();
// console.log(first);
// console.log(second);
// console.log(third);






//------------ break statement-----------------

// const fruit = 'mango';
// switch(fruit){
//     case 'apple':
//         console.log('apple is healthy for us');
//         break;
//     case 'mango':
//         console.log('mango is delecious');
//         break;
//     default:
//         console.log('i dont like fruits.');1
// }



// for (let i=1;i<6;i++){
//     if(i==4) break;
//     console.log(i);
// }



// let i = 1;
// while (i<=5){
//     console.log(i);
//     if(i===3){
//         break;
//     }
//     i++;
// }



// let j = 1;
// do {
//     console.log(j);
//         if(j === 3){
//             break;
//         }
//         j++;
//     }while (j<=5);





//--------------conditional statement--------------
//--if else

// let num = 20;
// if(num%2==0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }



//--else if
// const num = 0;
// if(num>0){
//     console.log("number is greater than zero");
// }
// else if(num<0){
//     console.log("number is less than zero");
// }
// else{
//     console.log("number is zero");
// }



//-------------------switch case ---------------
// const marks = 85;
// let branch;

// switch(true){
//     case marks >= 90:
//         branch = "computer science engineering";
//         break;
//     case marks >= 80:
//         branch = "mechanical engineering";
//         break;
//     case marks >= 70:
//         branch = "chemical enginerring";
//         break;
//     case marks >= 60:
//         branch = "elctreonics and communication";
//         break;
//     default:
//         branch = "bio technology";
//         break;
// }
// console.log("student branch name is : " + branch);






//--------------------try and catch statement--------------
//try - this statemnt lets you test a block of code to check for the errors
//catch - lets you handle the error if present


// try {
//     dadalert("Welcome fellow geek!"); // we make the use of 'dadalert whch is not a reserved keyword and is neithr efined hence we get the error.'
// }
// catch(err){
//     console.log(err);
// }

// function geekFunc(){
//     let a = 10;
//     try {
//         console.log("Value of variable a is : " + a);
//     }
//     catch(e){
//         console.log("Error: "+e.description) // catch block here will not run as there's no error in the above code and hence we get the output as it is 
//     }
// }
// geekFunc();






//---------------------throw statement------------------
//throw - lets you make ur ownm errors
//finally - lets u execute code after try and catch

// try{
//     throw new Error('Yeah....sorry');
// }
// catch(e){
//     console.log(e);
// }


// try {
//     console.log('try');
// }
// catch(e){
//     console.log('catch');
// }
// finally{
//     console.log('finally');
// }







//---------------------------javascript LOOPS-------------
//--FOR LOOP

// const subjects = ["mth","sci","polity","hist"];
// let len = subjects.length;
// let gfg = "";
// for(i =0;i<len;i++){
//     gfg += subjects[i];
// }
// console.log(gfg)



//-------------------------FOR/IN LOOP----------------
// function GFG() {
//     let Platform = { // creates an object
//         fname: "geeks", 
//         Mname:"for",
//         Lname:"geeks",
//     }
//     let text = "";
//     let x;
//     for (x in Platform){
//         text += Platform[x] + " ";
//     }
//     console.log(text);
// }
// GFG()
//for/in can used over arrays but not advised.
//use for/of and Array.forEach() loops are suggested to be used while working with arrays.






//----------------------label-------------------
// var sum = 0, a = 1;
// outerloop: while (true){ // label for outer loop
//     a = 1;

//     innerloop: while (a<3) {
//         sum += a;
//         if (sum > 12){
//             break outerloop;
//         }
//         console.log("sum = "+sum);
//         a++;
//     }
// }






//--------------string concatenate assignment operator-------------
// let str1 = "geeks";
// let str2 = "forgeeks";

// str1 += str2;
// console.log(str1);
// console.log(str1+str2);







