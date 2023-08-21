// Javascript Map Object
const foods = [
  { id: 1, title: 'Chicken Biriyani', dietary: 'non-veg', title: "Mutton Biriyani"  },
  { id: 2, title: 'Sambar', dietary: 'veg' },
  { id: 3, title: 'Curd Rice', dietary: 'veg' },
]

// Map
const maagiIngredients = new Map()
maagiIngredients.set("water", "1.5 Glass Cup")
maagiIngredients.set("masala", 1)
maagiIngredients.set('salt', '0.5 spoon')
maagiIngredients.set('chilly', '1 spoon')
maagiIngredients.set('chicken-masala', '1 spoon')
// maagiIngredients.set({},'empty obj')
// maagiIngredients.set(function(){}, 'empty function')
// maagiIngredients.set(NaN, 'NaN')

// or you can create like this.
const func = function () {};
const myMap = new Map([
  [1, 'One'],
  [2, 'Two'],
  [func, 'empty obj']
])

console.log('myMap', myMap.get(2));

// How to access the map data
console.log(maagiIngredients.get("salt"));

// how to get all size of map
console.log(maagiIngredients.size);

// Map Methods
console.log('Is sugar added?', maagiIngredients.has('sugar'));
maagiIngredients.clear() // it removes all the keys and values pairs from the map object
console.log(maagiIngredients.entries()); // return a new iterator object
console.log(maagiIngredients.keys()); // it returns an iterator for all keys in the map.
console.log(maagiIngredients.values()); // it returns an iterator for all values in the map.

console.log(maagiIngredients);

maagiIngredients.delete('chicken-masala') // it removes the specified key-pairs


// displaying map data
for(let [keyName, valueData] of maagiIngredients.entries()){
  console.log(keyName, valueData);
}

// foreach
maagiIngredients.forEach(ingredient => {
  console.log('forEach ', ingredient);
})


// Map Object - Object Key example
const myEmptyObj = {}
const exampleMap = new Map()
exampleMap.set(myEmptyObj, 'empty Object')
exampleMap.set('key', 'value')

console.log(exampleMap.get(myEmptyObj));

// WeakMap Object
const myAnotherObj = {}
const myWeakMap = new WeakMap()
myWeakMap.set(myAnotherObj, 'Anbu')

console.log(myWeakMap.get(myAnotherObj));


