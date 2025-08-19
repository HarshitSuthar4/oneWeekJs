// const user = new Object() // singleton object
const user = {} // Non singleton object

user.id = "Harshitsuthar__"
user.firstName = "Harshit"
user.isLoggedIn = true

// console.log(user);

const bgmiUser = {
email : "harshit@gmail.com",
inGameName : "Harshitsuthar",
userStats: {
 fdRatio: 5.6,
 totalFinishes: 1200,
 totalMatchPlayed : 200
}
}

console.log(bgmiUser.userStats.totalFinishes, bgmiUser.userStats.totalMatchPlayed);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}



const obj3 = {...obj1, ...obj2}
// console.log(obj3); // adding two objects using spread oprator 

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // adding two objects using assign method


const users = [

    {
        id: 122,
        email: "h@gmail.com"
    },
    {
        id: 122,
        email: "h@gmail.com"
    },
    {
        id: 122,
        email: "h@gmail.com"
    },
    {
        id: 122,
        email: "h@gmail.com"
    }
]
// console.log(users[1].email) // this is used when we have object inside array 

// console.log(Object.keys(igUser)); // get keys of an object
// console.log(Object.values(igUser)); // get key values of object
// console.log(Object.entries(igUser)); // it will convert all values into array ["key" "value"]

console.log(ogUser.hasOwnProperty('email')); // to find out if a perticuler object have a perticuler key or not
