### Object Overview

```js
const person = {
  name: 'Anbu',

  age: 27,

  bio: function () {
    console.log(`${this.name} is ${this.age} old!`)
  },

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`)
  },
}

console.log(person.name)

console.log(person.age)

person.introduceSelf()
```

### Creating Reusable Functions

```js
function createPerson(name, age) {
  let obj = {}

  obj.name = name

  obj.age = age

  obj.introduceSelf = function () {
    return `Hi my name is ${obj.name}`
  }

  return obj
}
```

### ReCreate it using Javascript `Constructor` function

A constructor function in JavaScript is used to create objects. It's a special type of function designed to initialize an object upon creation. Constructor functions are defined using a function declaration and are called using the new keyword.

#### Creating a Constructor Function

To create a constructor function, define a function with an uppercase first letter (by convention) and use the this keyword to assign properties to the object being created.

```js
function Person(name, age) {
  this.name = name

  this.age = age

  this.introduceSelf = function () {
    return `Hi my name is ${obj.name}`
  }
}

// To create a new object using the constructor function, use the new keyword followed by the function name and pass any required arguments.
const createdPerson1 = new Person('Anbu', 27)

const createdPerson2 = new Person('Trisha', 41)

console.log(createdPerson1)

console.log(createdPerson2)
```

### Explanation

1. **Function Definition**:

   - `Person` is a constructor function that initializes new `Person` objects.
   - `this.name`, and `this.age` are properties assigned to the object.

2. **Object Creation**:

   - `const person1 = new Person('Anbu', 27);` creates a new `Person` object with the specified values.
   - `const person2 = new Person('Trisha',  41);` creates another `Person` object with different values.

3. **Accessing Properties and Methods**:
   - You can access properties like `name` directly on the object (`createdPerson1.name`).
   - Methods defined within the constructor function can be called on the object (`createdPerson2.introduceSelf()`).

### Why Use Constructor Functions?

- **Code Reusability**: Constructor functions allow you to create multiple objects with the same properties and methods efficiently.
- **Organization**: They help keep your code organized by encapsulating object creation logic within a single function.

---
