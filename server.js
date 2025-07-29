const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello CyberDude!')
})

app.get('/login', (req, res) => {
  // // Cookie create
  // const myCookie = 'name=Anbu; max-age=5;'
  // res.setHeader('set-cookie', myCookie)

  res.cookie('sessionId', 'abc123', {
    // maxAge: 5000,
    path: '/admin',
    httpOnly: true,
    secure: true,
    // sameSite: 'strict',
  })

  res.send('Logged in, Cookies set!')
})

app.get('/admin/dashboard', (req, res) => {
  const cookie = req.headers.cookie
  res.send(`
        <h1>Welcome to Dashboard</h1>
        <p>We are learning server cookies! ${cookie}</p>
        `)
})

app.listen(3000, () => {
  console.log('Server is running on http://127.0.0.1:3000')
})
