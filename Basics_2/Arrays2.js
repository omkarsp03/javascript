const marvels_heros = [ "Spiderman" , " Ironman " , " Thor "]
const dc_heros = [ " Batman " , " Superman " , " Flash "]


// by using push method we can add the array into another array 
// but it will be added as a single element in the array
marvels_heros.push(dc_heros)
console.log(marvels_heros)

console.log("--------------------------------------------------")

const marvels_heros1 = [ "Spiderman" , " Ironman " , " Thor "]
const dc_heros1 = [ " Batman " , " Superman " , " Flash "]
// by using concat method we can add the array into another array and store it in a new array
const all_heros = marvels_heros1.concat(dc_heros1)
console.log(all_heros)


console.log("--------------------------------------------------")

// by using spread operator we can add the array into another array and
// store it in a new array no need to use concat method
const all_heros1 = [...marvels_heros1, ...dc_heros1]
console.log(all_heros1)

console.log("--------------------------------------------------")

// we use the flat method to separate the nested array into a single array
const array1 = [1, 2, 3, 4, 5,[6, 7, 8, 9,[10, 11, 12]]]
const another_array = array1.flat(Infinity) // by using flat method we can flatten the array
console.log(another_array)


console.log("--------------------------------------------------")

console.log(Array.isArray("Omkar")) //quickly check whether the given value is an array or not by using isArray method
console.log(Array.from("Omkar")) // by using from method we can convert the string into an array


console.log("--------------------------------------------------")

let n1= 100
let n2= 200
let n3= 300

console.log(Array.of(n1, n2, n3)) // by using of method we can create an array from the given values