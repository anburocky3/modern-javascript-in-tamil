// Array
const favMoviesOld = new Array(
  'Kakka Kakka',
  'Vettaiyadu vilaiyadu',
  'Shivaji',
  'Mudhalvan'
) // array constructor

const favMovies = [
  'Kakka Kakka',
  'Vettaiyadu vilaiyadu',
  'Shivaji',
  'Mudhalvan',
]

const foods = [
  { id: 1, title: 'Chicken Biriyani', dietary: 'non-veg' },
  { id: 2, title: 'Sambar', dietary: 'veg' },
  { id: 3, title: 'Curd Rice', dietary: 'veg' },
]

// Accessing values
console.log(foods[1].title)

// for loop
for (let i = 0; i < foods.length; i++) {
  console.log('Food items - for-loop', foods[i].title)
}

// for-in loop
for (let foodItem in foods) {
  console.log('for-in', foods[foodItem].title)
}

// for-of loop
for (let foodItem of foods) {
  console.log('for-of', foodItem.title)
}

foods.forEach((food) => {
  document.getElementById('result').innerHTML += '<li>' + food.title + '</li>'
})

// Multi-dimensional arrays
// const matrix = [
//   [11, 12, 13],
//   [21, [1, 2, 3], 23],
//   [31, 32, 33],
// ]

// console.log(matrix.flat(2))

const subjects = ['Physics', 'Maths', 'English', 'Science']

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
