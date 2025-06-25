console.log(localStorage)

// properties
// console.log(localStorage.length)

localStorage.setItem('name', 'Anbu')
localStorage.setItem('age', 28)

const movies = [
  {
    id: 1,
    title: 'Tourist Family',
  },
  {
    id: 2,
    title: 'Thug Life!',
  },
]

localStorage.setItem('movies', JSON.stringify(movies))

// How to get from localStorage
console.log('My Name is: ', localStorage.getItem('name'))
console.log('My Age is: ', localStorage.getItem('age'))
console.log('My movies are: ', JSON.parse(localStorage.getItem('movies')))

// How to remove from localStorage
// localStorage.removeItem('name')
// localStorage.removeItem('age')

// Remove all localStorage dat
// localStorage.clear()

// localStorage.key()
