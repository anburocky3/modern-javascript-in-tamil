const userHasAllInfo = new Promise((resolve, reject) => {
  // 1. Get user information
  resolve('I got the user info')
})

userHasAllInfo
  .then((user) => {
    console.log('USER INFO:', user)

    return new Promise((resolve, reject) => {
      // API: Call the user posts api: // 2. Get user posts
      //   resolve('I got the user posts')
      reject("I Don't have the posts")
    })
  })
  .then((userPost) => {
    console.log('USER INFO POST:', userPost)

    return new Promise((resolve, reject) => {
      // API: Call the user images api: // 3. Get user images
      resolve('I got the user images')
    })
  })
  .then((userImages) => {
    console.log('USER INFO IMAGES: ', userImages)
  })
  .catch((reason) => console.log('Error:', reason))
