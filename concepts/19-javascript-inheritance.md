##### Topics to cover

1. What is Inheritance?
2. Create a subclass and extend it
3. Overriding a method (Polymorphism)
4. Discussing about Prototype Inheritance
5. Overriding constructor
6. Assignment with solution
7. Encapsulation (private data property)
8. ~~Overriding class fields~~
9. Points to remember
   1. Arrow functions have no `super`

```js
// Learner (name, age, professionType)

class Learner {
  constructor(name, age) {
    this.name = name

    this.age = age
  }

  bio() {
    return `Hello my name is ${this.name} and i'm ${this.age} years old.`
  }
}

// derived class

class SchoolStudent extends Learner {
  // constructor(name, age, standard) {

  //   super(name, age)

  //   this.standard = standard

  // }

  attendClass(className) {
    console.log(`${this.name} is attending ${className} class`)
  }

  bio() {
    // return super.bio()

    return super.bio() + ` I'm studying ${this.standard} standard` // return `I'm studying ${this.standard} standard`
  }
}

const learner1 = new Learner('rajinikanth', 27, 'Software Engineer')

console.log('Learner Class', learner1)

console.log('Learner Class', Object.getPrototypeOf(learner1))

const schoolStudent = new SchoolStudent('Anbu', 18, '12th')

console.log('SchoolStudent Class', schoolStudent)

console.log('SchoolStudent Class', Object.getPrototypeOf(schoolStudent))

// console.log(schoolStudent.bio())

// console.log(schoolStudent.intro())
```
