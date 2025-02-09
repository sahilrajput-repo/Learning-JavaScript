// Primitive

// 7 Types :  String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false

const bigNumber = 5717704423n


// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "naagraj", "doga"];

let myObj = {
    name: "Sahil",
    age: 27,
}

const myFunction = function() {
    console.log("Hello World")
}

// console.log(typeof bigNumber); //bigint
// console.log(typeof outsideTemp); //object
// console.log(typeof scoreValue); //number
// console.log(typeof myFunction); // function
// console.log(typeof myObj); // object
// console.log(typeof anotherId); // symbol
// console.log(typeof id); // symbol

// Stack (Primitive), Heap (Non-Primitive)

let myInstagramHandle = "sahilrajput"

let anothername = myInstagramHandle
anothername = "khushichauhan"

console.log(myInstagramHandle);
console.log(anothername);

let userOne = {
    email: "user@gmail.com"
}

let userTwo = userOne

userTwo.email = "sahil@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


