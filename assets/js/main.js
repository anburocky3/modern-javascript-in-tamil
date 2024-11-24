try {
  const json = '{ "name": "Anbu", "age": 28 }'
  const user = JSON.parse(json)
  console.log('Showing the UI: ', user.name)

  if (user.isAlive === undefined) {
    // throw 'IsAlive is not available'
    throw new Error('IsAlive is not available')
  }
} catch (error) {
  console.error(error.stack)
}

console.log('Everything finished! good bye!')
