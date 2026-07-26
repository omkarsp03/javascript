const score = 400 
console.log(score)

const marks = new Number(100);
console.log(marks)

console.log(marks.toString())
console.log(typeof marks)


const balance = new Number(100)
console.log(balance.toFixed(2))
console.log(balance.toExponential(4))


const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));


//------------------ Maths -----------------------



console.log(Math);
//converts negative value to positive 
console.log(Math.abs(-1))
// round of to single value removes decimal 
console.log(Math.round(4.5))
// prints high number if after decimal point there is any value eg: (4.1= 5)
console.log(Math.ceil(4.1))
//print low number if there is any value after the decimal point eg: (4.2 = 4)
console.log(Math.floor(4.3))

console.log( Math.min(2,4,6,1))
console.log(Math.max(3,4,5,2,7))
// Random always print in between 0 or 1 value in decimal format so we have to multiply it with 10 and also +1 to avoid the output 0 
console.log(Math.floor((Math.random(1,10)*10)+1))