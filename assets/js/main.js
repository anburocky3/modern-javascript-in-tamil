// Object Destructuring
const person = {
  firstName: 'Anbu',
  lastName: 'Selvan',
  age: 27,
  isAlive: true,
  favColor: 'blue',
  parent: {
    father: 'Appa',
    mother: 'Amma',
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

// Default values
const { firstName, lastName, favColor = 'red' } = person

//// Assigning new variable names
const { firstName: myFirstName, lastName: myLastName } = person

console.log(firstName, lastName, favColor)

//// Object Destructuring and rest operator
let favNum1, favNum2
;({ favNum1, favNum2, ...otherValues } = {
  favNum1: 1,
  favNum2: 3,
  favNum3: 5,
  favNum4: 7,
  favNum5: 9,
})

console.log(favNum1, favNum2, otherValues)

// const { firstName, lastName, ...remainingPersonDetail } = person

// console.log(firstName, lastName, remainingPersonDetail)

// Destructing in Functions
function displayUser({ firstName, lastName, age, favColor: favoriteColor }) {
  console.log(
    `Hello my name is ${firstName} ${lastName} and my age is ${age} and my fav color is ${favoriteColor}`
  )
}

displayUser(person)
