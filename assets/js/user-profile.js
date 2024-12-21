// 1. Get UserProfile By ID
const userProfile = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      resolve({
        id: userId,
        name: 'Anbu',
        email: 'anbuceo@gmail.com',
      }),
      1000
    )
  })
}

// 2. Get UserPost by ID
const userPost = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Some API Problem')
      // resolve([
      //     {
      //       id: 1,
      //       title: 'Learning ReactJS from scratch',
      //       content: 'You can learn many things here, subscribe CyberDude',
      //     },
      //     {
      //       id: 2,
      //       title: 'TailwindCSS is great!',
      //       content: 'Checkout cyberdude for more information',
      //     },
      //     {
      //       id: 3,
      //       title: 'Typescript is great!',
      //       content: 'Checkout cyberdude for more information',
      //     },
      //   ])
    }, 2000)
  })
}
// 3. Get UserComments By ID
const userComments = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      resolve([
        {
          id: 1,
          content: 'Looking forward for your coding tutorials',
        },
        {
          id: 2,
          content: 'Thanks for your videos',
        },
      ]),
      3000
    )
  })
}

const fetchAllData = (userId) => {
  return Promise.all([
    userProfile(userId),
    userPost(userId),
    userComments(userId),
  ])
    .then(([userInfo, userPost, userComments]) => {
      return {
        userInfo,
        userPost,
        userComments,
      }
    })
    .catch((error) => {
      console.error('Error', error)
    })
}

fetchAllData(1)
  .then(({ userInfo, userPost, userComments }) => {
    // Display UI using DOM.

    //   Profile Info
    document.querySelector('#user-name').textContent = userInfo.name
    document.querySelector('#user-email').textContent = userInfo.email

    //   Profile Post
    const postTemplate = userPost.map(
      (post) => `
     <div class="border p-4 rounded-lg">
        <h4 class="text-lg font-semibold">${post.title}</h4>
        <p class="text-gray-600 mt-2">${post.content}</p>
        <div class="text-sm text-gray-400 mt-2">Posted on December 20, 2024</div>
    </div>
    `
    )

    document.querySelector('#posts').innerHTML = postTemplate.join('')

    //   3. User Comments

    const commentTemplate = userComments.map(
      (comment) => `
  <div class="border p-4 rounded-lg">
        <div class="flex items-center space-x-4">
            <img src="https://dummyimage.com/40" alt="User Avatar"
                class="w-10 h-10 rounded-full object-cover">
        </div>
        <p class="mt-2 text-gray-600">${comment.content}</p>
    </div>
  `
    )

    document.querySelector('#comments').innerHTML = commentTemplate.join('')

    console.log('UI Display', userComments)
  })
  .catch((error) => {
    console.error('Error in displaying data')

    // Show that to user
    document.body.innerHTML = `
    <h1 class="bg-red-500 text-white text-2xl p-10">Error in displaying User Data</h1>
    `
  })
