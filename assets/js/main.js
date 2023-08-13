// Object

// const obj_name = new Object() // Object constructor syntax
// const obj_name = {} // Object literal syntax

// const personFirstName = "Anbu"
// const personLastName = "Selvan"
// const personFavColor = "red"
// const personAge = 27
// const personAlive = true

const person = {
  firstName: 'Anbu',
  lastName: 'Selvan',
  age: 27,
  isAlive: true,
  parent: {
    father: 'Appa',
    mother: 'Amma',
  },
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

const personMethod = {
  yearOfBirth: function () {
    // get year of birth from age.
    return new Date().getFullYear() - this.age
  },
  favNumbers: [1, 3, 5, 7],
  get favNumCount() {
    return this.favNumbers.length
  },
}

// Object Merging
Object.assign(person, { favColor: 'red' })
// person.favColor = 'red'

// Object cloning
const personCopied = Object.assign({}, person)
personCopied.firstName = 'Tamil'

// Object Spread Syntax
const finalObj = { ...person, ...personMethod }

// Delete Properties
delete finalObj.isAlive, finalObj.yearOfBirth

// ES6 Syntax
// Object Property Initializer
function getFullName(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  }
}

console.log(getFullName('Anbu', 'Selvan'))

console.log(person, personCopied, finalObj)
