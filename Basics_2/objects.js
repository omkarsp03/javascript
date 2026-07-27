
//we can use symbol as a key in object literal. Symbol is a primitive data type introduced in ES6. 
// It is used to create unique identifiers for object properties. 
// Each time you create a new symbol, it is guaranteed to be unique.
const sym = Symbol('mySymbol');

// Syntax of object literal
// const / let / var objectName = {}

//example of object literal
const ob = {
    name: "Omkar",
    roll : 3,
    [sym]: "Hello"
}

//output 
console.log(ob.name); // Omkar
console.log(ob.roll); // 3
console.log(ob[sym]); // Hello


// Adding methods to the object
ob.greeting = function()
{
    console.log("Hello JS World");
}

// Adding another method to the object that uses 'this' to access object properties
ob.greeting1 = function()
{
    console.log(`My name is ${this.name} and my roll number is ${this.roll}`);
}

// Calling the methods
console.log(ob.greeting()); // Hello JS World
console.log(ob.greeting1()); // My name is Omkar and my roll number is 3

// This will make the object immutable, preventing any changes to its properties.
Object.freeze(ob); 
