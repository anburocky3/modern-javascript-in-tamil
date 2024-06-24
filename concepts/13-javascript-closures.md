### Understanding JavaScript Closures

A **closure** in JavaScript is a fundamental concept where a function retains access to its lexical scope, even when the function is executed outside that scope. This means that a closure gives you access to an outer function's scope from an inner function.

#### How Closures Work

When a function is defined, it captures its surrounding lexical environment (the variables and functions in scope at the time of its creation). When this function is returned and executed elsewhere, it still has access to that lexical environment.

### Example of a Closure

Here's a simple example to illustrate closures:

```js
function outsideFunction(outerVar) {
  const outerVariable = outerVar

  const localState = 'I will be visible only in this block'

  const insideFunction = (innerVar) => {
    console.log('Outer variable', outerVariable)

    console.log('Inner variable', innerVar)

    console.log('Outer variable (local)', localState)
  }

  return insideFunction
}

const myClosure = outsideFunction('outside')

myClosure('inner')
```

In this example, `insideFunction` forms a closure. It captures the variable `outerVariable` from its outer scope (`outsideFunction`). When `myClosure` is called, it still has access to `outerVariable`, even though `outerFunction` has finished executing.

### Practical Uses of Closures

Closures are useful for various purposes in JavaScript, including:

1. **Data Encapsulation and Privacy**:

Closures can be used to create private variables and methods.

```js
function points(totalPointsArg) {
  console.log('Outside: Function running')

  const totalPoints = totalPointsArg // ADD, REMOVE, getTotalPoints

  const addPoints = (points) => {
    return totalPoints + points
  }

  const removePoints = (points) => {
    return totalPoints - points
  }

  const getTotalPoints = () => {
    return totalPoints
  }

  return { addPoints, removePoints, getTotalPoints }
}

const table = points(100)

console.log(table.addPoints(40))

console.log(table.removePoints(20))

console.log(table.getTotalPoints())
```

### Summary

- **Closures** allow a function to access variables from its outer scope, even after the outer function has finished executing.
- **Practical Uses**: Closures are useful for data encapsulation, maintaining state in asynchronous code, and creating function factories.
- **Key Concept**: The captured variables in a closure remain accessible to the inner function, ensuring that the state is preserved.

Understanding closures is crucial for mastering JavaScript, as they are widely used in various patterns and practices across the language.
