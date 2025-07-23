# 🍪 Creating Cookies by Server using Express.js

This example demonstrates how to **create HTTP cookies on the server** using **Node.js and Express.js**. It covers how to:

- Set cookies using `res.cookie()`
- Control cookie properties such as `httpOnly`, `secure`, `maxAge`, and `path`
- Access cookies from client requests

---

## 📁 Project Structure

```

cookie-server/
│
├── index.js       # Main server file
├── package.json   # Project metadata and dependencies
└── README.md      # You're here!

```

---

## 🚀 Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/anburocky3/modern-javascript-in-tamil.git
cd modern-javascript-in-tamil
```

### 2. Install Dependencies

```bash
npm install express
```

### 3. Run the Server

```bash
node index.js
```

Server will run at: [http://127.0.0.1:3000](http://127.0.0.1:3000)

---

## 🧠 How It Works

### ➤ `/login`

This route sets a **cookie named `sessionId`** with the following properties:

```js
res.cookie('sessionId', 'abc123', {
  path: '/admin',
  httpOnly: true,
  secure: true,
})
```

| Property   | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| `path`     | Cookie will only be accessible under `/admin` routes                 |
| `httpOnly` | Prevents JavaScript access on client-side for security               |
| `secure`   | Only sent over HTTPS connections (you may need to run HTTPS to test) |

### ➤ `/admin/dashboard`

This route reads and displays the cookie from `req.headers.cookie`. You’ll only see the cookie here if it’s sent from the browser and matched by path `/admin`.

---

## 🧪 Try it Out

1. Visit: [http://localhost:3000/login](http://localhost:3000/login)
   → You should see "Logged in, Cookies set!"

2. Then visit: [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)
   → You should see the cookie value printed.

⚠️ Note: Because `secure: true` is set, the cookie will **not be stored in HTTP connections**. You need to run the server over **HTTPS** or **remove `secure: true`** for local testing.

---

## 📚 Learn More

- [Express.js - res.cookie() documentation](https://expressjs.com/en/api.html#res.cookie)
- [MDN Web Docs - HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
