## Other popular array methods:

These are just a few examples of the many array methods available in JavaScript. Understanding and using these methods will greatly enhance your ability to work with arrays in a more concise and efficient manner.

1. [`Array.prototype.forEach()`](#foreach)
2. [`Array.prototype.map()`](#map)
3. [`Array.prototype.at()`](#arrayprototypeat)
4. [`Array.prototype.copyWithin()`](#arrayprototypecopywithin)
5. [`Array.prototype.entries()`](#arrayprototypeentries)
6. [`Array.prototype.values()`](#arrayprototypevalues)
7. [`Array.prototype.every()`](#arrayprototypeevery)
8. [`Array.prototype.fill()`](#arrayprototypefill)
9. [`Array.prototype.filter()`](#arrayprototypefilter)
10. [`Array.prototype.find()`](#arrayprototypefind)
11. [`Array.prototype.findLast()`](#arrayprototypefindLast)
12. [`Array.prototype.findIndex()`](#arrayprototypefindIndex)
13. [`Array.prototype.findLastIndex()`](#arrayprototypefindLast)
14. [`Array.prototype.flat()`](#arrayprototypeflat)
15. [`Array.prototype.flatMap()`](#arrayprototypeflatMap)
16. [`Array.from()`](#arrayfrom)
17. [`Array.of()`](#arrayof)
18. [`Array.prototype.includes()`](#arrayprototypeincludes)
19. [`Array.prototype.indexOf()`](#arrayprototypeindexOf)
20. [`Array.prototype.lastIndexOf()`](#arrayprototypelastIndexOf)
21. [`Array.isArray()`](#arrayisarray)
22. [`Array.prototype.join()`](#arrayprototypejoin)
23. [`Array.prototype.keys()`](#arrayprototypekeys)
24. [`Array.prototype.reduce()`](#arrayprototypereduce)
25. [`Array.prototype.reduceRight()`](#arrayprototypereduceRight)
26. [`Array.prototype.reverse()`](#arrayprototypereverse)
27. [`Array.prototype.toReversed()`](#arrayprototypetoreversed)
28. [`Array.prototype.some()`](#arrayprototypesome)
29. [`Array.prototype.sort()`](#arrayprototypesort)
30. [`Array.prototype.toSorted()`](#arrayprototypetosorted)
31. [`Array.prototype.toLocaleString()`](#arrayprototypetoLocaleString)
32. [`Array.prototype.toString()`](#arrayprototypetoString)
33. [`Array.prototype.with()`](#arrayprototypewith)

```js
Array.reverse() or Array.toReversed()
Array.toSpliced()
```

#### **`forEach()`**

- Executes a provided function once for each array element.

```javascript
let numbers = [1, 2, 3, 4]

// Logging each element to the console
numbers.forEach(function (num) {
  console.log(num)
})
```

#### **`map()`**

- Creates a new array by applying a function to each element in an existing array.

```javascript
let numbers = [1, 2, 3, 4]
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

fruits.map((fruit) => {
  console.log('Fruits in lowercase: ', fruit.toLowerCase())
})

// Doubling each element
let doubledNumbers = numbers.map(function (num) {
  return num * 2
})

console.log(doubledNumbers) // [2, 4, 6, 8]
```

#### **`Array.prototype.at()`**

```js
const array1 = ['a', 'b', 'c']

console.log(array1[1]) // returns b
console.log(array1.at(1)) // returns b
```

#### **`Array.prototype.copyWithin()`**

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

// Copy to index 0 the element at index 3
console.log(fruits.copyWithin(0, 1, 2))
// Expected output: Array ['Orange', 'Orange', 'Apple', 'Mango']

// Copy to index 1 all elements from index 3 to the end
console.log(fruits.copyWithin(0, 1))
// Expected output: Array ['Orange', 'Apple', 'Mango', 'Mango']
```

#### `Array.prototype.entries()`

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

// Iterating manually
const iterator = fruits.entries()
console.log(iterator.next().value)

// Iterating with Index and Element
for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit)
}
```

#### `Array.prototype.values()`

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

// Iterating manually
const iterator = fruits.values()
console.log(iterator.next().value)

// Iterating with Index and Element
for (const [index, fruit] of fruits.values()) {
  console.log(index, fruit)
}
```

#### `Array.prototype.every()`

```js
const obtainedMarks = [78, 51, 56, 78, 87]

// returns true based on condition
const result = obtainedMarks.every((eachMark) => eachMark > 50)

console.log(result) // true
```

#### `Array.prototype.fill()`

```js
const array1 = [1, 2, 3, 4]
const array2 = [1, 2, 3, 4]
const array3 = [1, 2, 3, 4]

// fill the value 0, starting 2 index and end with 3.
console.log(array1.fill(0, 2, 3))

// fill the value 5, starting 1 index
console.log(array2.fill(5, 1))

// fill the value 6
console.log(array3.fill(6))
```

#### `Array.prototype.filter()`

```js
const humanNames = ['Anu', 'Banu', 'Cathy', 'Dory', 'Ellie']

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

const result = humanNames.filter((name) => name.length > 3)

const activeUsers = users.filter((user) => user.active === true)

console.log(result)
console.log(activeUsers)
```

#### `Array.prototype.find()`

```js
const numbers = [5, 12, 50, 130, 44]

const result = numbers.find((num, index, arr) => {
  console.log(index, arr)
  return num > 40
})

console.log(result) // 50

const fruits = ['apple', 'banana', 'orange', 'grape', 'banana']

const bananaFruit = fruits.find((fruit, index, arr) => {
  console.log(index, arr)
  return fruit === 'banana'
})

console.log(bananaFruit)
```

#### `Array.prototype.findLast()`

```js
const numbers = [5, 12, 50, 130, 44]

const result = numbers.findLast((num, index, arr) => {
  console.log(index, arr)
  return num > 40
})

console.log(result) // 44
```

#### `Array.prototype.findIndex()`

```js
const array1 = [5, 12, 8, 130, 44]

const result = array1.findIndex((arr) => arr > 30)

console.log(result) // 3
```

#### `Array.prototype.findLastIndex()`

```js
const numbers = [5, 12, 8, 130, 44]

const result = numbers.findLastIndex((arr) => arr > 30)

console.log(result) // 4
```

#### `Array.prototype.flat()`

```js
// Flattening a array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log('flatting', [].concat(...matrix)) // without ES6+
console.log(matrix.flat()) // reduce dimensional array (ES6+)
```

#### `Array.prototype.flatMap()`

```js
const arr1 = [1, 2, 1]

const result = arr1.flatMap((num) => (num === 2 ? [2, 3, 4] : 1))

console.log(result)
// Expected output: Array [1, 2, 3, 4, 1]
```

#### `Array.from()`

```js
// Array.from()
Array.from('Anbu')
// Expected output: Array ["a", "n", "b", "u"]
```

#### `Array.of()`

```js
const s = Array.of('food', true)
// Expected output: Array ['food', true]
```

#### `Array.prototype.includes()`

```js
const array1 = [1, 2, 3]

console.log(array1.includes(2))
// Expected output: true

const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat'))
// Expected output: true

console.log(pets.includes('at'))
// Expected output: false
```

#### `Array.prototype.indexOf()`

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(beasts.indexOf('bison'))
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2))
// Expected output: 4

console.log(beasts.indexOf('giraffe'))
// Expected output: -1
```

#### `Array.prototype.lastIndexOf()`

```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

console.log(animals.lastIndexOf('Dodo'))
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'))
// Expected output: 1
```

#### `Array.isArray()`

```js
console.log(Array.isArray([1, 3, 5]))
// Expected output: true

console.log(Array.isArray('[]'))
// Expected output: false

console.log(Array.isArray(new Array(5)))
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])))
// Expected output: false
```

#### `Array.prototype.join()`

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

console.log(fruits.join(', '))
```

#### `Array.prototype.keys()`

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

console.log(fruits.keys())

for (const key of fruits) {
  console.log(key)
}

for (const key of fruits.keys()) {
  console.log(key, typeof key)
}

for (const val in fruits) {
  console.log(val, typeof val)
}
```

#### `Array.prototype.reduce()`

```js
const customerSpentAmount = [450, 80, 790, 1252]

// 450 + 80 + 790 + 1252
const sumWithInitial = customerSpentAmount.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)

console.log(sumWithInitial)
// Expected output: 2572
```

#### `Array.prototype.reduceRight()`

```js
const customerSpentAmount = [450, 80, 790, 1252]

// 1252 + 790 + 80 + 450
const sumWithInitial = customerSpentAmount.reduceRight(
  (accumulator, currentValue) => {
    return accumulator + currentValue
  },
  0
)

console.log(sumWithInitial)
// Expected output: 2572
```

#### `Array.prototype.reverse()`

```js
const fruit = ['apple', 'banana', 'cherry']
console.log('Original fruit:', fruit)

const reversed = fruit.reverse()
console.log('Reversed: ', reversed)

console.log(fruit)
// Careful: reverse is destructive -- it changes the original array.
```

#### `Array.prototype.toReversed()`

```js
const fruit = ['apple', 'banana', 'cherry']
console.log('Original fruit:', fruit)

const reversed = fruit.toReversed()
console.log('Reversed: ', reversed) // see now it copies, non-destructive

console.log(fruit)
```

#### `Array.prototype.some()`

```js
const users = [
  {
    id: 1,
    name: 'Anbu',
    ticket: false,
  },
  {
    id: 2,
    name: 'Raman',
    ticket: true,
  },
  {
    id: 3,
    name: 'Trisha',
    ticket: false,
  },
]

const valid = users.some((user) => user.ticket)

console.log(valid)
```

#### `Array.prototype.sort()`

```js
// ## Example 1
const fruits = ['banana', 'apple', 'orange', 'grape']

// Using sort without a custom sorting function
const sortedFruits = fruits.sort()

console.log(sortedFruits) // Output: ['apple', 'banana', 'grape', 'orange']

// ## Example 2

const numbers = [10, 5, 8, 2, 7]

// Using sort with a custom sorting function for numbers
const sortedNumbers = numbers.sort((a, b) => a - b)

console.log(sortedNumbers) // Output: [2, 5, 7, 8, 10]
```

#### `Array.prototype.toSorted()`

```js
const fruits = ['banana', 'apple', 'orange', 'grape']

const sortedFruits = fruits.toSorted()

console.log(sortedFruits) // Output: ['apple', 'banana', 'grape', 'orange']

console.log(fruits)
```

#### `Array.prototype.toLocaleString()`

The toLocaleString method in JavaScript is used to convert a number or date into a string representing it in a locale-specific way. It is commonly used for formatting numbers and dates based on the user's locale.

```js
// Example #1
const myDate = new Date('23 Aug 1998 14:10:00 UTC')
const myLocalDate = myDate.toLocaleString('en', { timeZone: 'Asia/Kolkata' })

console.log(myLocalDate)

// # Example 2

const prices = [250, 500, 8123, 12]

const amountInRupee = prices.toLocaleString('hi-IN', {
  style: 'currency',
  currency: 'INR',
})

console.log(amountInRupee)
```

#### `Array.prototype.toString()`

```js
const data = ['a', 'n', 'b', 'u', 0o3, true]

console.log(data.toString())
```

#### `Array.prototype.with()`

```js
const arr = [1, 2, 3, 4, 5]

arr[2] = 'Three'
console.log(arr)

// We can do the same thing like here
console.log(arr.with(2, 'Three'))

console.log(arr)
```

## Author:

[Anbuselvan Rocky](https://fb.me/anburocky3)
