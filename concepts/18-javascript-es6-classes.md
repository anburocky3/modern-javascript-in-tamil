### Javascript Classes

1. Problem with function constructor?
2. Class Declaration
3. Class Expression
   1. Class Named Expression
   2. Anonymous Expression
4. Getters and Setters
5. Class fields
6. Assignments
7. Create a class called "Learner"

### Before classes we use Function constructor?

```js
// ### What are the problems in Function Constructor?
// 1. Syntax and readability
// 2. Inheritance - Complex implementation
// 3. No built-in checks for new;
// 4. Sharing methods are little difficult
function Person(name, age) {
  this.name = name
  this.age = age

  if (new.target === Person) {
    this.name = name
    this.age = age
  } else {
    throw new Error('Function must be called with new keyword')
  }
}

Person.prototype.greet = function () {
  return `Hello ${this.name}`
}

const invitedPerson1 = new Person('Anbu', 27)
const invitedPerson2 = Person('Trisha', 41)

console.log(invitedPerson1.greet())
console.log(invitedPerson2.greet())
```

### What are the problems in Function Constructor?

1. Syntax and readability
2. Inheritance - Complex implementation
3. No built-in checks for new;
4. Sharing methods are little difficult

## What is class?

A class defines a blueprint for creating objects with shared properties and methods.

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    )
  }
}

const anbu = new Person('Anbu', 27)

anbu.greet() // Hello, my name is Anbu and I am 27 years old.
```

#### Class Expression

```js
// Class Expression
const Person = class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    )
  }
}

const anbu = new Person('Anbu', 27)

anbu.greet() // Hello, my name is Anbu and I am 27 years old.
```

#### Anonymous Class

```js
// Anonymous Class
const Person = class {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    )
  }
}

const anbu = new Person('Anbu', 27)

anbu.greet() // Hello, my name is Anbu and I am 27 years old.
```

#### Benefits of using classes:

- Built-in check that the constructor is called with `new`, preventing errors.
- Support for `super` in constructors and methods.
- Simplicity, especially when dealing with subclasses or built-in types like `Error` or `Array`.

## Getters and Setters & Class Fields

```js
// Learner (name, age, professionType)
class Learner {
  constructor(name, age, profession) {
    this._name = name
    this._age = age
    this.profession = profession
  }

  org = 'cyberdude'

  get name() {
    return this._name.toUpperCase()
  }

  set name(value) {
    this._name = value
  }

  get age() {
    return this._age
  }

  set age(value) {
    if (typeof value === 'number') {
      this._age = value
    } else {
      console.error('invalid age')
    }
  }

  bio() {
    return `Hello my name is ${this.name} and i'm ${this.age} years old. And my profession is: ${this.profession}, org is ${this.org}`
  }
}

const learner1 = new Learner('rajinikanth', 27, 'Software Engineer')

learner1.age = 20
console.log(learner1)
```
