// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

// Pseudo code:
// declare a function named stringOne
// input/parameters: two strings
// expected output: the string with more characters
// use conditional statements to return the string with more characters
// use a builtin method to compare the amount of characters in each variable - length method 

// function
const stringOne = (word1, word2) => {
  if(word1.length > word2.length){
    return word1
  } else {
    return word2
  }
}
console.log(stringOne(fruit1, fruit2))
console.log(stringOne(fruit3, fruit4))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
// From Web Developer Brook
// Pseudo code:

  //Function: boiling point
  //parameter: Any given number
 //expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
 //conditional statements:if the temperature is at boiling point it will return its at its boiling point. If its above it boiling point it will return its above its boiling point. If it below its temp it will return below temp


 const temp1 = 42
 const temp2 = 350
 const temp3 =  212

const boilingPoint = (temps) => {
   if(temps < 212) {
   return "Its below boilingpoint"
  } else if(temps > 212) {
    return "Its above boilingpoint"
   }else if(temps === 212) {
    return "Its hot in here"
   }
 }
    console.log(boilingPoint(temp1))
   console.log(boilingPoint(temp2))
    console.log(boilingPoint(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
// From Developer Daniel
// Pseudo code: 
// Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let bothNumArr = myNumbers1.concat(myNumbers2)
console.log(bothNumArr.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"
// From Web Developer Namier

// // Pseudo code:
// Utilize .split and split each character into an array
// Utilize .reverse to reverse the array
// Utilize .join to create string 

const currentCohort = "Echo 2022"

console.log(currentCohort.split('').reverse().join(''))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// From web Developer Tuan

// Pseudo code: Using loops, the count of the loop will start at index 0 until 6, and after each loop it will output the string "odd" or "even" depending on the remainder of the modulo. If the remainder is 0 then its "even" and if the remained is not 0 then it will output "odd"

const myArray = [13, 34, 5, 10, 27, 42]
 for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
    console.log('even')
 } else {
    console.log('odd')
    } 
}


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3
// From Developer Luis

// Pseudo code:
// create function w/ new var 
// compare bigger num w/ small num > < 
// return with it subtracting big - small
// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subTotal = (numInput1,numInput2) => {
  if (numInput1 < numInput2) { 
    return (numInput2 - numInput1)
  } else if (numInput1 > numInput2) {
   return numInput1 - numInput2
  }
}

console.log(subTotal(number1,number2)) ;
console.log(subTotal(number3,number4))

