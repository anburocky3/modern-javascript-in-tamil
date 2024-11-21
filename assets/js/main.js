// Function prototype methods
const numbers = [5, 2, 4, 7, 1]

// console.log(Math.min(5, 2, 4, 7, 1))
// console.log(Math.max(5, 2, 4, 7, 1))

//  Function.prototype.apply()
const result = Math.min.call(null, 5, 2, 4, 7, 1)
const result2 = Math.min.apply(null, numbers)
// Function.prototype.bind()

const result3 = Math.min.bind(null, ...numbers)

console.log('using call()', result)
console.log('using apply()', result2)
console.log('using bind()', result3())
