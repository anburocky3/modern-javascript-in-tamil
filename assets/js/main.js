// function outsideFunction(outerVar) {
//   const outerVariable = outerVar

//   const localState = 'I will be visible only in this block'

//   const insideFunction = (innerVar) => {
//     console.log('Outer variable', outerVariable)

//     console.log('Inner variable', innerVar)

//     console.log('Outer variable (local)', localState)
//   }

//   return insideFunction
// }

// const myClosure = outsideFunction('outside')

// myClosure('inner')

function points(totalPointsArg) {
  console.log('Outside: Function running')
  const totalPoints = totalPointsArg

  // ADD, REMOVE, getTotalPoints
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
