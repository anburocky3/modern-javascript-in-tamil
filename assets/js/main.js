const numbers = ['one', 'two', 'three', 4, 5]

// Destructuring assignment
const [red, yellow, green, ...rest] = numbers

console.log(red) // "one"
console.log(yellow) // "two"
console.log(green) // "three"

console.log(rest)

// Array of Objects
const users = [
  {
    id: 1,
    name: 'Anbu',
    active: true,
  },
  {
    id: 2,
    name: 'Trisha',
    active: true,
  },
  {
    id: 3,
    name: 'Krishnan',
    active: false,
  },
]

const [Anbu, Trisha] = users

console.log(Anbu, Trisha)

// Example 3

const greeting = 'Hello'

// Destructuring a string into an array of characters
const [firstChar, secondChar, ...remainingChars] = greeting

console.log(firstChar) // Output: 'H'
console.log(secondChar) // Output: 'e'
console.log(remainingChars) // Output: ['l', 'l', 'o']
