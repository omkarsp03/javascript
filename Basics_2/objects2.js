const target = { 1: 'a', 2:'b'}
const source = { 3: 'c', 4: 'd' }


// The Object.assign() method is used to copy the values of all enumerable 
// own properties from one or more source objects to a target object. 
// It returns the modified target object.
const returnedtarget = Object.assign({} ,target, source);

// Using the (spread operator) to merge the target and source objects into a new object
const targ = { ...target, ...source };
console.log(targ);

// Printing the modified target object after merging with source object
console.log(returnedtarget); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



//------------------ Objects -----------------------
//objects is created using {} and it is a collection of key value pairs
const tinderuser ={}

tinderuser.id= 1
tinderuser.name = 'John'
tinderuser.isloggedin = true

console.log(tinderuser)

// it will return the keys of the object in an array
console.log(Object.keys(tinderuser))
// it will return the values of the object in an array 
console.log(Object.values(tinderuser)) 
// it will return the key value pairs of the object in an array
console.log(Object.entries(tinderuser)) 


// Deconstructuring is a feature in JavaScript that allows you to extract values from objects
//  or arrays and assign them to variables in a more concise and readable way.

const courses = {
    coursename: 'JavaScript',
    price: 500 ,
    instructor: 'Omkar'
}

const { coursename , price, instructor } = courses
console.log(coursename , price, instructor) // it will print the value of coursename key from courses object