// Array

// // Defining Array using Array Constructor
const arrayName = new Array(
  'Kakka Kakka',
  'Vettaiyadu Vilaiyadu',
  'Shivaji',
  3,
  {}
)

// Array can have objects too
const foods = [
  {
    id: 1,
    title: 'Biriyani',
    dietary: 'non-vegetarian',
  },
  {
    id: 2,
    title: 'Sambar Rice',
    dietary: 'vegetarian',
  },
]

console.log(arrayName)

// // Defining Array using Array Literal
const favItems = ['Kakka Kakka', 'Vettaiyadu Vilaiyadu', 'Shivaji', 3, {}]

console.log(favItems)

// // Accessing Array elements
console.log(favItems[0])

// // Multi-dimensional array
const matrix = [
  [11, 10, 10],
  [20, 22, 20],
  [30, 30, 33],
]

console.log(matrix[0][1]) // getting first index of elements with 1 index value.

// Passing array to function
const subjects = ['Physics', 'Maths', 'English', 'Social']

function displayAllSubjects(subjects) {
  // // for loop
  // for (let i = 0; i < subjects.length; i++) {
  //   console.log(subjects[i])
  // }

  // // for-in loop
  for (let subject in subjects) {
    console.log('subjects for-in', subjects[subject])
  }

  // // for-of loop
  for (let subject of subjects) {
    console.log('subjects for-of', subject)
  }

  // // forEach method
  subjects.forEach((subject) => {
    console.log('Subjects', subject)
  })
}

displayAllSubjects(subjects)
