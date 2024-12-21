// 4. Promise.any() - ES12
const promise1 = Promise.reject(0)

const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'quick')
})

const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'slow')
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Something went wrong'), 50)
})

Promise.any([promise1, promise2, promise3, promise4])
  .then((response) => {
    console.log('Response', response)
  })
  .catch((error) => {
    console.error('Error', error)
  })
