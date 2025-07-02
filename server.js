const express = require('express')
const app = express()

app.get('/login', (req, res) => {
  // Set a secure, HttpOnly cookie
  res.cookie('sessionId', 'abc123', {
    httpOnly: true, // Not accessible in JS
    secure: true, // Only sent on HTTPS
    maxAge: 1000 * 60 * 60, // 1 hour
  })

  res.send('Logged in. Cookie set!')
})

app.get('/dashboard', (req, res) => {
  const cookies = req.headers.cookie
  console.log('Received cookies:', cookies) // You’ll see sessionId here
  res.send('Welcome to Dashboard')
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
