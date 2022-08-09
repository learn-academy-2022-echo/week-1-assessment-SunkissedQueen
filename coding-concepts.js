// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer:["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: 5; the console.log is showing how many values are in my array after the push method


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)
// From Developer Jereme
// a) Your answer: 10
// b) Verify and explain: counts all the characters even the spaces


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])
// From Developer Jason
// a) Your answer: "o"
// b) Verify and explain: The 4th index has a value of "o"


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// From Web Developer Vanessa, confirmed by Developer Joseph
// a) Your answer: This will return "Ruby" because it is asking for the entry in index 1
// b) Verify and explain: This is correct, it returns Ruby


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// From Developer Joyce
// a) Your answer: initially thought the values would be in caps
// b) Verify and explain: received an error message; cannot use .toUpperCase() on the array. Need to switch to a string datatype


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)
// From Developer Dawit
// a) Your answer: 6, thought it would count the last string in the array
// b) Verify and explain: number, dataTypes.length will give 3 for the amount of values in the array. type of will state that the datatype of 3 is a number.
