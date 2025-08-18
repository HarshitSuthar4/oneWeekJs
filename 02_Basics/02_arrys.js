const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["batman", "flash", "superman"]

// marvel_heroes.push(dc_heroes) // if we add two strings like this then the secound string will be added into the first one as an element it self

// console.log(marvel_heroes);

// console.log(marvel_heroes[3][2]); // this is how you can access the elements inside that secound string which is an element of the first string  THIS IS CONSIDERED AS BAD PRACTICE

let allHeroes = marvel_heroes.concat(dc_heroes) // This is how you can concat or add two strings whithout faceing any problem and there is one more way for doing it is SPREAD OPRATOR
// console.log(newArr);


// SPREAD OPRATOR
const allNewHeroes = [...marvel_heroes, ...dc_heroes] // this there dots are called spread oprator which spreads out the strings  

// console.log(allNewHeroes);

const multipalArr = [1, 2, 3, 4,[5, 6, 7],11,[8, 9, 10, 11,[12, 13, 14, 15]]] // array inside of an array inside of an array and so on.

const newanthraArr = multipalArr.flat(Infinity); //this is how you can get out of a Array hell (in my words XD)
// console.log(newanthraArr);

// console.log(Array.isArray("Harshit")); // isArray is used to check if any value is array or not

// console.log(Array.from("Harshit")); // FROM is used to convert any type of value to an Array.

// console.log(Array.from({name: "Harshit"})); // it gives an empty arra y because it cannot convert keys to an string directly


let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3));// Array.of is used to get values of any variable or any set of elemet into the string.






