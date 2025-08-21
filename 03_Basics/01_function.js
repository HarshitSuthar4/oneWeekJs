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


function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 350, 400)); // to add all the values together we have to use ...rest operator (spread and rest operator are same but it depends on use case what will you call it )   
// 

const chair = {
    chairType: "gameing chair",
    price: 15999
}

function product(object) {
    console.log(`product is ${object.chairType} and price is ${object.price}`);  
}
// product(chair); // this is how we can put any object values inside a function

const myNewArr = [200, 150, 500, 410];

function returnVal(val) {
    return val[3]    
}
console.log(returnVal(myNewArr))


//Note: function stored or holded without a variable is called function only.
//function holded inside a variable is called function expression.
//Examples => 


    funcation(){

    } // this is a normal function structure

    const myFunction = function() {
        
    } // this is called function expression.
