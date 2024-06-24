### Example: Adding Methods to a Constructor's Prototype

Let's create a constructor function `Person` and add methods to its prototype.

```javascript
// Constructor function
function Person(name, age) {
  this.name = name
  this.age = age
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}

// Adding another method to the prototype
Person.prototype.haveBirthday = function () {
  this.age += 1
  console.log(`Happy Birthday! I am now ${this.age} years old.`)
}

// Creating instances of Person
const person1 = new Person('Alice', 30)
const person2 = new Person('Bob', 25)

// Using the methods
person1.greet() // Output: Hello, my name is Alice and I am 30 years old.
person2.greet() // Output: Hello, my name is Bob and I am 25 years old.

person1.haveBirthday() // Output: Happy Birthday! I am now 31 years old.
person2.haveBirthday() // Output: Happy Birthday! I am now 26 years old.
```

### Explanation

1. **Constructor Function**: `Person` is a constructor function that initializes an object with `name` and `age` properties.
2. **Prototype**: We add methods `greet` and `haveBirthday` to `Person.prototype`. This way, all instances of `Person` will inherit these methods.
3. **Instances**: We create two instances of `Person` named `person1` and `person2`.
4. **Using Methods**: Both `person1` and `person2` can use the methods defined on `Person.prototype`.

### Benefits

- **Memory Efficiency**: Methods are shared among all instances, rather than being created for each instance.
- **Dynamic Addition**: Methods can be added to the prototype at any time, and all instances will immediately have access to them.

This example shows how to effectively use prototypes in JavaScript to manage object-oriented behavior and share methods across instances.

```js
// List all prototypes of Array

const ArrObjs = Object.getOwnPropertyNames(Array.prototype)

for (const func in ArrObjs) {
  console.log(ArrObjs[func])
}
```
