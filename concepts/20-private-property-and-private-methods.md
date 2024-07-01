```js
class Learner {
  #pin

  constructor(name, age, pin) {
    this.name = name

    this.age = age

    this.#pin = pin

    this._protectedProperty = 'some value'
  }

  bio() {
    return `Hello my name is ${this.name} and i'm ${
      this.age
    } years old. ${this.#secretPin()}`
  }

  #secretPin() {
    return `This is my secret pin: ${this.#pin}`
  }
}

const learner = new Learner('Anbu', 27, 1234)

console.log(learner.bio())

console.log(learner._protectedProperty)
```
