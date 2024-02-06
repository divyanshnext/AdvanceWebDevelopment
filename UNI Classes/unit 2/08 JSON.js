// encoding data to JSON format

// A JSON format is just like key value pair - where "key" is also in "" and value too.

const dataObject = {
    name : "John",
    age: 30,
    city: "New York"
};                             // this is not in json format this is object format where key is not in " ";

const jsonString = JSON.stringify(dataObject); // stringify method convert a object to a JSON format // 
console.log(jsonString);




// decoding from JSON

const jsonString_2 = '{"name":"John","age":30,"city":"New York"}'; // this is json format 

const dataObject_2 = JSON.parse(jsonString_2);
console.log(dataObject_2);

