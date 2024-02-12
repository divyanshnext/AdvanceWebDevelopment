// const constantVar = "i am constant";
// if(true){
//     console.log(constantVar);
// }

function exampleFunction(){
    if(true){
        var functionScopedVar = "I am function-scoped";
        let blockScopedLet = "i am block scoped";
        const blockScopedConst = "i ma constant and block scoped";

    }
    console.log(functionScopedVar);
    console.log(functionScopedLet);
    console.log(functionScopedConst);
}