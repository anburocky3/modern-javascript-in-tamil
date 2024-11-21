## 22 - Javascript Static Properties and Methods

In JavaScript, static properties and methods are associated with the class itself, rather than with instances of the class. This means they can be accessed directly on the class, not on individual instances. Here's a deeper look at static properties and methods, their use cases, and how to define them.

### Static Properties

Static properties are variables that belong to the class itself. They are not accessible on instances of the class.

#### Defining Static Properties

You can define static properties directly inside the class using the `static` keyword.

```javascript
class MyClass {
  static myStaticProperty = 'This is a static property'
}

console.log(MyClass.myStaticProperty) // Output: This is a static property
```

### Static Methods

Static methods are functions that belong to the class itself. They are not accessible on instances of the class and do not have access to instance properties or methods.

#### Defining Static Methods

You can define static methods using the `static` keyword.

```javascript
class MyClass {
  static myStaticMethod() {
    return 'This is a static method'
  }
}

console.log(MyClass.myStaticMethod()) // Output: This is a static method
```

### Accessing Static Properties and Methods

Static properties and methods are accessed directly on the class, not on an instance of the class.

```javascript
class MyClass {
  static myStaticProperty = 'This is a static property'

  static myStaticMethod() {
    return 'This is a static method'
  }
}

console.log(MyClass.myStaticProperty) // Output: This is a static property
console.log(MyClass.myStaticMethod()) // Output: This is a static method

const myInstance = new MyClass()
console.log(myInstance.myStaticProperty) // Output: undefined
console.log(myInstance.myStaticMethod) // Output: undefined
```

### Use Cases for Static Properties and Methods

1. **Utility Functions**: Methods that perform utility tasks and do not require instance-specific data.

   ```javascript
   class MathUtils {
     static add(a, b) {
       return a + b
     }

     static subtract(a, b) {
       return a - b
     }
   }

   console.log(MathUtils.add(5, 3)) // Output: 8
   console.log(MathUtils.subtract(5, 3)) // Output: 2
   ```

2. **Constants**: Storing constants that are shared across all instances.

   ```javascript
   class Config {
     static API_URL = 'https://api.example.com'
     static TIMEOUT = 5000
   }

   console.log(Config.API_URL) // Output: 'https://api.example.com'
   console.log(Config.TIMEOUT) // Output: 5000
   ```

3. **Tracking Instances**: Keeping track of the number of instances created.

### Examples we have used in this video:

```js
class Dog {
  constructor(name, year) {
    this.name = name

    this.bornYear = year
  }

  static type = 'Animal'

  age() {
    return new Date().getFullYear() - this.bornYear
  }

  static intro(name) {
    return `Hello I'm dog species! and my name is ${name}`
  }
}

const dog = new Dog('Daisy', 2019)

const dog2 = new Dog('Rocky', 2018)

console.log(dog)

console.log(Dog.type) // static properties

console.log(Dog.intro('Shalini'))

console.log(Dog.intro('Raghuvaran'))
```

```js
// Basic syntax

class CyberDude {
  // static staticProperty = 'someValue'

  static place = 'Chennai' // static property or static field

  static pincode = 600123 // static property or static field // static staticMethod() { //   return 'static method has been called.' // }

  static address() {
    return `${this.place}, ${this.pincode}`
  }
}

const cdn = new CyberDude()

console.log(cdn)

console.log(CyberDude.address())

// Inbuild static methods

Math.PI // => static property or static field

Math.random() // => static method

// Array

Array.isArray() // check if it is array

Number.isNaN() // check Number is not a number(NaN)

Object.keys({}) // Returns an array of the object's own enumerable property keys.

String.fromCharCode(65, 78, 66, 85) // converts Unicode values to characters (ANBU).
```

```js
class ShoppingItem {
  constructor(product, cost) {
    this.product = product

    this.cost = cost

    this.constructor.totalCount++
  }

  static totalCount = 0

  display() {
    return `Product name is: ${this.product} and its cost is ₹${this.cost}`
  }

  static getTotalCount() {
    return this.totalCount++
  }
}

const remoteCar = new ShoppingItem('Remote Car', 4999)

const playStation = new ShoppingItem('PlayStation 6', 45000)

const playStation2 = new ShoppingItem('PlayStation 6', 45000) // 3rd

console.log(remoteCar)

console.log(playStation)

console.log('TotalCount', ShoppingItem.getTotalCount())
```

### Summary

- **Static Properties**: Variables that belong to the class itself. Useful for storing constants and shared data.
- **Static Methods**: Functions that belong to the class itself. Useful for utility functions and tasks that do not depend on instance-specific data.
- **Access**: Both static properties and methods are accessed directly on the class, not on instances.

By understanding and utilizing static properties and methods, you can better organize your code and implement more efficient and reusable designs.
