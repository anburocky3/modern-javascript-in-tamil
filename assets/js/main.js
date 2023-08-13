// Object Destructuring
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

// Default values
const { firstName, lastName, favColor = 'red' } = person

//// Assigning new variable names
const {
  firstName: myFirstName,
  lastName: myLastName,
  favColor = 'red',
} = person

console.log(firstName, lastName, favColor)

//// Object Destructuring and rest operator
let favNum1, favNum2, rest
;({ favNum1, favNum2, ...rest } = {
  favNum1: 1,
  favNum2: 3,
  favNum3: 5,
  favNum4: 7,
})

console.log(favNum1, favNum2, rest)

// Destructing in Functions
function changeFullName({ firstName, lastName }) {
  console.log(firstName, lastName)
}

changeFullName(person)
