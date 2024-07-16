// * global variables scope => Any variable define outside function is global variable

let globalVariableScope = "I am a global variable";

// *function variables scope

function iamAFunction() {
    {
        // * var variable define inside function has function level scope
        var functionVariablesScope = "Iam a function variable";
        // * let variable define inside any block has block level scope
        let blockLevelVariablesScope = "Iam a block level variable";

        console.log(globalVariableScope); // returns output
        console.log(functionVariablesScope); // returns output
        console.log(blockLevelVariablesScope); // returns output

    }
    console.log(globalVariableScope); // returns output
    console.log(functionVariablesScope); // returns output
    //  console.log(blockLevelVariablesScope); // reference error
}

iamAFunction()
console.log(globalVariableScope); // returns output
// console.log(functionVariablesScope); // references error
// console.log(blockLevelVariablesScope); // references error