// Pure Functions
// add a function which will add points
function addPoints(point) {
  return point + 50
}

const addedPoints = addPoints(50)
const addedPoints2 = addPoints(10)
const addedPoints3 = addPoints(10)

console.log(addedPoints, addedPoints2, addedPoints3)

function toUppercase(text) {
  return text.toUpperCase()
}

const result = toUppercase('anbu') // => ANBU
const result2 = toUppercase('trisha') // => TRISHA

console.log(result, result2)

// Impure Functions
const foodList = ['Chicken Biriyani', 'Curd', 'Sambar']

function addFoods(food) {
  // return foodList.push(food)
  return [...foodList, food]
}

const addedFoods = addFoods('Fried Rice')

console.log('ORIGINAL', foodList)
console.log('ADDED', addedFoods)

/*
- **Impure functions** behave differently:

  - They can **modify the state of the application** or **have side effects**.

  - Their behavior can be **unpredictable** and they may affect other parts of the application.

- Characteristics of impure functions:

  - They can modify state or have side effects.

  - They depend on other parts of the code.

  - Testing and maintenance are harder.
*/
