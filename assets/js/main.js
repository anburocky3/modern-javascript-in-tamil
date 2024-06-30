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
