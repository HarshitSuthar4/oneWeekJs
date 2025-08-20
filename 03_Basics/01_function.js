// console.log("H");
// console.log("a");
// console.log("r");
// console.log("s");
// console.log("h");
// console.log("i");
// console.log("t");

function printMyName() {
console.log("H");
console.log("a");
console.log("r");
console.log("s");
console.log("h");
console.log("i");
console.log("t");
} // this is the syntax of a function to create a function

// printMyName(); //this is how we can call a function and i can use it multipletimes

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);  
// }

// const result = addTwoNum(1, 1);
// console.log(result); // if we log the result now then we will get the result as undefined becasue we have not returend the funcation yet, taking the same example again. 

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
}
 
addTwoNumbers(10, 10);
// console.log(result);


function userLogin(username) {
    return `${username} just logged in`
}

// console.log(userLogin("Harshit"))
// console.log(userLogin("")); // if you pass empty string into the arguments the output will be like CHECK TERMINAL AND RUN CODE
// console.log(userLogin()); // if we pass nothing to the arguments then result will be undefined  



