// var outputContainer = document.createElement("div");
// var userInput = window.prompt("Enter Something");
// var output = document.createElement("p");
// output.appendChild(document.createTextNode("you entered: "+ userInput));
// outputContainer.appendChild(output);
// document.body.appendChild("outputContainer");

// const arr1=["pankaj","sumit","chandan","ajay"];
// console.log(arr1.toString());
// arr1[2]="Narayan"; // possible
// console.log(arr1.toString());

// const person = {
//     first_name: "Pankaj",
//     last_name: "Singh",
//     Age: 20,
//     About: "Web developer"
// };
// console.log(person);
// person.first_name="Aryan";
// console.log(person);

// var test = 12;
// function foo(){
//     console.log(test);
// }
// foo();

function exampleFunction(){
    if(true){
        var functionScopedVar = "I am function-scoped";
    }
    console.log(functionScopedVar); // print krega
}
exampleFunction();
console.log(functionScopedVar); // show error // type : function level scope 

