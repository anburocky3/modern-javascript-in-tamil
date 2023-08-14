const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

// access array
console.log(fruits[1])
console.log(fruits.length) // get length of that array

// // Array methods
fruits.pop()
fruits.push('Potato')

console.log(fruits.shift())
console.log(fruits.unshift('new-array'))

// delete array
delete fruits[1]

// merging arrays
const breakfast = ['idly', 'poori', 'vadai']
const lunch = ['Chicken Biriyani']
const dinner = ['parotta', 'grill-chicken']

const overallFood = breakfast.concat(lunch, dinner, 'juice')

console.log(overallFood)

// Flattening a array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(matrix.flat()) // reduce dimensional array

// Splicing & Slicing methods
console.log(fruits.slice(2, 3))

console.log(fruits.splice(1, 0))
// Array.reverse() or Array.toReversed()
// Array.toSpliced()
// Array.toSpliced()

document.getElementById('result').innerHTML = fruits.toString()
document.getElementById('result').innerHTML = fruits.join(' - ')

// // ES-Commonly used
Array.map()
Array.with()
Array.sort() // Array.toSorted()
Array.some()
Array.reduce()

Array.from()
Array.to()
Array.copyWithin()
Array.find()
Array.findIndex()
Array.entries()
Array.keys()
Array.values()
Array.fill()

Array.forEach()
