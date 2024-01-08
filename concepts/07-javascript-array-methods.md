# Javascript Array Methods

JavaScript provides a variety of built-in methods for manipulating arrays. These methods make it easier to perform common tasks such as adding, removing, or transforming elements in an array. Here are some commonly used array methods with practical examples:

Lets all see it in action. About `CRUD` operations

### 01 - Creating a array

```js
const thingsInMind = new Array() // Array() constructor
const thingsInMind = [] // empty array

// Array of values
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

// Array of objects
const users = [
  { id: 1, name: 'Anbu', status: true },
  { id: 2, name: 'Trisha', status: true },
]
```

### 02 - Reading a array

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

fruits[5] = 'Seethapalam'

fruits.forEach((item, index) => {
  console.log(`${index}: ${item}`)
})
```

### 03 - Pushing/Updating to existing arrays (push, unshift)

- `push()`: Adds one or more elements to the end of an array.
- `unshift()`: Adds one or more elements to the beginning of an array.

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

// Push
const result = fruits.push('Grapes')

// Unshift
const result1 = fruits.unshift('Pine Apple')

console.log(result, result1, fruits)
```

### 04 - Deleting array value

- `pop()`: Removes the last element from an array.
- `shift()`: Removes the first element from an array.

```js
let fruits = ['apple', 'banana', 'orange']

// Removing the last element
let removedLastFruit = fruits.pop()
let removedFirstFruit = fruits.shift()

console.log(removedLastFruit, removedFirstFruit) // 'orange', 'apple
```

### 05 - **`slice()`**

- Returns a shallow copy of a portion of an array.

```javascript
let fruits = ['apple', 'banana', 'orange', 'grape']

// Creating a new array with elements from index 1 to 3 (exclusive)
let slicedFruits = fruits.slice(1, 3)

console.log(slicedFruits) // ['banana', 'orange']
```

### 06 - `splice()`

- Used for adding or removing elements from any position in an array.

```javascript
let fruits = ['apple', 'banana', 'orange', 'grape']

// Removing elements from index 1, and adding 'berry' and 'melon'
fruits.splice(1, 2, 'berry', 'melon')

fruits.toSpliced()

console.log(fruits) // ['apple', 'berry', 'melon', 'grape']
```

### 07 - Merging arrays

```js
const breakfast = ['idly', 'poori', 'vadai']
const lunch = ['Chicken Biriyani']
const dinner = ['parotta', 'grill-chicken']

// Using concat
const overallFood = breakfast.concat(lunch, dinner, 'juice')

// Or using spread operator
const overallFoodSpread = [...breakfast, ...lunch, ...dinner, 'juice']

// Or using Array.push()
const overallFoodPush = [].push(...breakfast, ...lunch, ...dinner, 'juice')

console.log(overallFood, overallFoodSpread, overallFoodPush)
```

## Author:

[Anbuselvan Rocky](https://fb.me/anburocky3)
