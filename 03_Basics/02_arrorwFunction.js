const user = {
    userName: "Harshit Sutahr",
    courseName: "JS for beginners",

    notify: function () {
        console.log(`${this.userName} bought ${this.courseName}.`);

    } // THIS reffers to currunt context.
}
// user.notify();
user.userName = "Harsh" // this will change the curruct context and the value of that object will be overwritten.
// user.notify()

// console.log(this);

// function name() {
//     let uName = "Harshit"
//     console.log(this.uName);
    
// }
// name()

// const func1 = function(){
//     let uName = "Harshit"
//     console.log(this.uName);
// }
// func1()


// now arrow functions comes in action () => {}

// const addTwo = (num1, num2) => {
// return num1 + num2;
// } // when we use curly braces we have to use explecit return to get an output, but
// console.log(addTwo(1,1))

const addOne = (num1, num2) => (num1 +num2) // in implecit return you dont have to use return keyword to get an output

// console.log(addOne(10,10));

const add = (n1, n2) => ({username: "Harshit"}) // to print an object we have to use curly braces
console.log(add(1, 2));

