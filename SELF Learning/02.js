//-------------------------JAVASCRIPT OBJECTS--------- 
//-------------------------------ARRAY------------------
// let names = [];
// console.log(names);

// let courses =['html','css','javascript','react']; // craetion of array



//using array constructor
// let names = new Array(); // declaration of an empty array
// console.log(names);

// let courses = new Array("Html",'css','javascript','react');//intializing array with values 
// console.log(courses);

// let arr = new Array(3); //intializing array while decalaraing
// arr[0] = 10;
// arr[1]=20;
// arr[2]=30;
// console.log(arr);



//--------------operations on javascript arrays----------------

// let courses = new Array("Html",'css','javascript','react');
// console.log(courses[0]); //accessing the element

// console.log(courses)

// let lastItem = courses[courses.length - 1]; //accessing the last item
// console.log('last item: ',lastItem);

// courses[1] = "bootstrap"; //modification the array element
// console.log(courses);

// courses.push("node.js"); // add element to the end of the array
// courses.unshift("java"); // add element to beginning

// console.log(courses);

// let lastElement = courses.pop(); // ye peeche se element remove krta hai 
// console.log(courses);

// let firstElement = courses.shift(); // ye aage se element remove krta hai 
// console.log(courses);

// courses.splice(1,2); // ye 2 element remove krega // position start hoga index se i.e, 0 
// console.log(courses);






//-----------------------concatenate array-----------------

// let courses = ['html','css','javascript','react'];
// let otherCourses = ['node.js','express.Js'];

// let concateArray = courses.concat(otherCourses);
// console.log("concatnated array: ", concateArray);



//------------------conversion of array to string------------

// we have a builtin method toString() to convert an array to a string

// let courses = ['html','css','java','react'];
// console.log(courses.toString());
// console.log(typeof courses); // it will chck the type of array


