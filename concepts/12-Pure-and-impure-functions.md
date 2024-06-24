## Pure and Impure Functions

In JavaScript, functions can be categorized as either pure or impure. Pure functions are functions that always return the `same output` for the `same input` and do not have any side effects, while impure functions may have `side effects` and `behave differently` for the `same input`.

### Pure Functions:

- **Pure functions** exhibit some remarkable characteristics:

- They **always return the same output** when given the same input parameters.

- They **do not modify any state or have side effects**.

- Their behavior is **predictable** and **deterministic**.

- They are **easier to test, debug, and maintain**.

- Advantages of pure functions:

- Easier testing due to predictable behavior.

- Composability for creating complex behaviors.

- Memoization for performance improvements.

- Example 1: Consider the following pure function:

```javascript
function addPoints(point) {
  return point + 100
}

console.log(addPoints(34)) // Output: 134

console.log(addPoints(4)) // Output: 104

console.log(addPoints(12)) // Output: 112
```

The `addPoints()` function consistently returns the same output for the same input, without affecting any external state or code.

- Example 2: Another pure function:

```javascript
function capitalize(str) {
  return str.toUpperCase()
}

console.log(capitalize('anbu')) // Output: ANBU

console.log(capitalize('selvan')) // Output: SELVAN
```

The `capitalize()` function transforms a string to uppercase without side effects.

### Impure Functions:

An impure function in JavaScript is a function that, in addition to returning a value, may also have side effects, such as modifying variables outside its scope, mutating data structures, or performing I/O operations. Here's an example of an impure function:

- **Impure functions** behave differently:

- They can **modify the state of the application** or **have side effects**.

- Their behavior can be **unpredictable** and they may affect other parts of the application.

- Characteristics of impure functions:

- They can modify state or have side effects.

- They depend on other parts of the code.

- Testing and maintenance are harder.

- In summary, pure functions have several advantages over impure functions, such as being easier to test, debug, and maintain. Pure functions only depend on their input parameters and do not modify the state of the application or have side effects.

```js
const favFoods = ['Biriyani', 'Fried Rice', 'Curd Rice']

function addFood(arr, food) {
  return arr.push(food)
}

const result = addFood(favFoods, 'Sambar')

console.log('Original:', favFoods)

console.log('Added:', result) // impure function
```

> The `addFood` function modifies the `favFoods` array and making it impure.

## Best practices:

- Use Spread operator to avoid modifying the original array.

```js
const favFoods = ['Biriyani', 'Fried Rice', 'Curd Rice']

function addFood(arr, food) {
  return [...arr].push(food)
}

const result = addFood(favFoods, 'Sambar')

console.log('Original:', favFoods)

console.log('Added:', result) // pure function
```
