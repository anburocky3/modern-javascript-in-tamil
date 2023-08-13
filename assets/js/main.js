// Array
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

const maagiIngredients = new Map()
maagiIngredients.set('maagi-masala', 1)
maagiIngredients.set('water', '1.5 Glass')
maagiIngredients.set('salt', '0.5 Spoon')
maagiIngredients.set('chilly-powder', '0.5 Spoon')
// maagiIngredients.set({}, 'empty obj')
// maagiIngredients.set(function(){}, 'function')
// maagiIngredients.set(NaN, 'function')

// how to get?
console.log(maagiIngredients.get('maagi-masala'))

// how to get all size of map?
console.log(maagiIngredients.size)

// Map methods
console.log(maagiIngredients.has('salt'))

console.log(maagiIngredients.entries()) // return a new iterator object

console.log(maagiIngredients.keys()) // it returns an iterator for all keys in the map.

console.log(maagiIngredients.values()) // it returns an iterator for all values in the map.

maagiIngredients.delete('chilly-powder') // it removes the specified key-pairs

// for-of
for (const [key, value] of maagiIngredients) {
  console.log('For-Ingredients', key, value)
}

// forEach
maagiIngredients.forEach((ingredient) => {
  console.log(ingredient)
})

maagiIngredients.clear() // it removes all the keys and values pairs from the map object

console.log(maagiIngredients)

// Weak maps
