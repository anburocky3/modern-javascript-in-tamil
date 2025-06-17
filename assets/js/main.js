/*
1. Get User by Id
2. Get all User subscriptions (hotstar, prime)
3. Calculate total cost of all
*/

function getUserId(id) {
  return new Promise((resolve, reject) => {
    console.log('Got UserID:', id)

    setTimeout(() => {
      resolve({ id: id, name: 'Anbu' })
    }, 1000)
  })
}

function getSubscriptions(userInfo) {
  return new Promise((resolve, reject) => {
    console.log('Got User subscriptions for ', userInfo)
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Hotstar' },
        { id: 2, title: 'Prime' },
        { id: 3, title: 'Sunnxt' },
      ])
      //   reject('Something went wrong')
    }, 2000)
  })
}

function calculateCost(subscriptions) {
  console.log('Subscriptions:', subscriptions)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(subscriptions.length * 100)
    }, 3000)
  })
}

// Executing promise
// getUserId(1)
//   .then(getSubscriptions)
//   .then(calculateCost)
//   .then((cost) => {
//     console.log('My Total cost is: ', cost)
//   })

async function displayTotalCost() {
  try {
    const userInfo = await getUserId(1)
    const subscriptions = await getSubscriptions(userInfo)
    const totalCost = await calculateCost(subscriptions)

    console.log(totalCost)
    console.log('Everything is fetched!')
  } catch (error) {
    console.error('CATCH:', error)
  }
}

displayTotalCost()
