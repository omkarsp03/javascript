/*

# Primitive Datatype:
1.String
2.Number
3.Boolean
4.null
5.undefined 
6.Symbol
7.BigInt

# Reference type (Non P rimitive)
1. Array
2. Objects
3. FUnctions

*/

const id = Symbol('123')
const anotherid = Symbol('123');

console.log(id == anotherid);
const heros = ["Omkar" , " harsh " , " saurav "];
let obj = {
    name : "Omkar ",
    roll : 2
}

const myfun = function(){
    console.log("Hello World");
    
}

console.log( heros)
console.log(obj)


// ==================================================================


/*
Stack memory ( primitive )
*/
let myname = "Omkar"
let anothername = myname
anothername = " patil "
console.log(anothername)
console.log(myname)



/*
heap memory ( non-primitive )
*/
let userone = 
{
    email : " Omkar@gmail.com"
}
let usertwo = userone
usertwo.email="patil@gmail.com"
console.log(userone)
console.log(usertwo)