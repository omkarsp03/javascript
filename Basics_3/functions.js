// function is a block of code that performs a specific task
function name()
{
    console.log("O")
    console.log("M")
    console.log("K")
    console.log("A")
    console.log("R")
    
}

name()

function sum (num1,num2)
{
    console.log(num1+num2)
}
sum(10,20)



function sum1 (num1,num2)
{
    let result = num1+num2
    return result
}
const result = sum1(10,20)
console.log("result: ", result)

function user (username)
{
    return `${username} just Logged in`
}
console.log(user("omkar"))

// here we are using rest operator (is also known as Spread Operator (it depends on where it's used)) to take multiple arguments in a function
function calculate ( ...num)
{
    return num;
}
console.log(calculate(10,23,4,3,23))

//here we created an object 
const users =
{
    username: "omkar",
    age: 23,
}

// we passed the object as an argument to the function and we are accessing the properties of the object using dot notation
function usersd (anyobject)//we can name the parameter anything we want but it is a good practice to name it something meaningful
{
    console.log(`My Username is ${anyobject.username} and my age is ${anyobject.age}`)
}
// we are calling the function and passing the object as an argument the name of the object is users and we are passing it to the function usersd
usersd(users)