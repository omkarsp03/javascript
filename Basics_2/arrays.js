let years = ["2","02"]
console.log(years[0] != years[1]);


// Arrays in javascript are dinamic 


// array defined 
const fruits = [];
// array initilization (we are pushing value using function push() )
fruits.push("mango","kiwi","apple");
console.log(fruits);

// use to pop or remove the element form the array (always when we use pop the last element of the array will be reomoved )
fruits.pop()
console.log(fruits);


// length of array is 3
console.log(fruits.length);


//we add the elemnt at the first if the arrys
fruits.unshift(2)
console.log(fruits)

//we remove the elemnet for the first of the array 
fruits.shift()
console.log(fruits)

// we added magno at index 5 
fruits[5] = "mango";
console.log(fruits[5]); 

// return the index of the element that holds the place in the array 
console.log(Object.keys(fruits)); 

// prints the length of the array 
console.log(fruits.length); 


console.log("------------------------------------------------");



//------------------ Slice -----------------------------

// slice does not chnage any value from the original array
const nums = [1,2,3,4,5,6]
const nums1 =nums.slice(1,3)
console.log("Original Array - ", nums) //Original Array -  [ 1, 2, 3, 4, 5, 6 ]
console.log("A", nums1) //A [ 2, 3 ]


//------------------ Splice -----------------------------

// splice makes changes on the original array
const nums2 =nums.splice(1,3)
console.log("Original Array - ", nums)// Original Array -  [ 1, 5, 6 ]
console.log("B" , nums2); // output = B [ 2, 3, 4 ]
