// Object
const objName = new Object() // object constructor syntax
const objName2 = {} // Object literal syntax

// const personFirstName = 'Anbu'
// const personLastName = 'Selvan'
// const personAge = 27
// const personFavColor = 'red'

const person = {
  firstName: 'Anbu',
  lastName: 'Selvan',
  age: 27,
  isAlive: true,
  parent: {
    father: 'Appa',
    mother: 'Amma',
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

person.favColor = 'red'

// getting object values
// document.getElementById('result').innerHTML = person.fullName()

// Object merging
const personMethods = {
  yearOfBirth() {
    return new Date().getFullYear() - this.age
  },
  favNumbers: [1, 3, 5, 7, 9],
  get favNumbersCount() {
    return this.favNumbers.length
  },
}

// Object Merging
Object.assign(person, personMethods)

// Object Cloning
const objCopied = Object.assign({}, person)

// Spread Operator
const finalObj = { ...person, ...personMethods }

// Delete
delete person.age

function getFullName(firstName, lastName) {
  return {
    firstName,
    lastName,
  }
}

console.log(getFullName('Anbu', 'Selvan'))

console.log(person, person.favNumbersCount)
