const superHeroes = ["Captain America", "Thor", "Iron man", "Flash"]

//  superHeroes.forEach( function (val) {
//     console.log(val);   
//  } ) // forEach using normal function

// superHeroes.forEach( (names) => { 
//     console.log(names);   
// }) //forEach using arrow function

// function printMe(h){
// console.log(h);
// }
// superHeroes.forEach(printMe) // forEach on a normal function

// superHeroes.forEach( (names, index, superHeroes) =>{
// console.log(index, names, superHeroes);
// })  // access values, index and the array 


const programming = [
    {
        laguageName: "JavaScript",
        extension: "JS"
    },
    {
        laguageName: "jav",
        extension: "java"
    },
    {
        laguageName: "TypeScript",
        extension: "TS"
    },
    {
        laguageName: "python",
        extension: "py"
    },
    {
        laguageName: "Ruby",
        extension: "ruby"
    },
    {
        laguageName: "Golang",
        extension: "Go"
    },
    {
        laguageName: "C",
        extension: "C"
    },
    {
        laguageName: "C++",
        extension: "C++"
    },
    {
        laguageName: "rust",
        extension: "rust"
    }
]

// programming.forEach( (lang)=>{
//     console.log(lang.laguageName);
// } )

const val = superHeroes.forEach((name)=>{
    console.log(name);
    // return name
})

console.log(val);