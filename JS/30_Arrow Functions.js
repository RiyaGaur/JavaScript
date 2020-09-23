// ARROW FUNCTIONS

// Creating a regular function
const msg = function (){
    console.log("This is the best person ever")
}

// Converting it to an arrow function
const msg = ()=>{
    console.log("This is the best person ever")
}
msg();

// function returning something
const greet = function(){
    return "Good Morning";
}

// One liners do not require braces/return
// one line will automatically return
const greet = () =>  "Good Morning";

const greet = () =>  ({name: "msg"});

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greet = name =>  "Good Morning " + name + ending;



console.log(greet('msg'))
