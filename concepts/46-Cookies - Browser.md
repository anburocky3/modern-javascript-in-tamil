# 🍪 JavaScript Cookies in the Browser

This project demonstrates how to create and manage cookies in the browser using plain JavaScript.

## 📄 Overview

Cookies are small pieces of data stored in the user's browser to track information like login sessions, user preferences, and activity. They are sent along with HTTP requests to the server, making them useful for authentication, tracking, and personalization.

This example shows how to:

- Set cookies in JavaScript
- Define cookie attributes like `path`, `domain`, `expires`, `max-age`, `secure`, and `httpOnly`
- Store JavaScript objects as stringified cookies
- Read cookies from the browser

---

## 💡 Sample Code

```html
<body class="p-10 bg-blue-50 dark:bg-blue-950 text-white">
  <h4 class="text-3xl">Cookies</h4>
  <a href="/admin/dashboard.html">Dashboard</a>

  <script>
    const hobbies = {
      reading: 'book',
      singing: 'tamil',
    }

    // Writing cookies in JavaScript
    document.cookie = `name=${encodeURIComponent(
      'anbu selvan'
    )}; domain=.127.0.0.1; max-age=${1000 * 60};`
    document.cookie = 'age=28; expires=Sat, 06 July, 2025 12:00:00'
    document.cookie = 'role=admin; path=/admin/; secure; httpOnly;'
    document.cookie = `hobbies=${JSON.stringify(hobbies)}`

    // Reading cookies
    console.log(document.cookie)
  </script>
</body>
```

---

## 🔍 Cookie Breakdown

| Key       | Description                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------- |
| `name`    | Stores the user's name (encoded).                                                                       |
| `age`     | Stores the user's age with an expiry date.                                                              |
| `role`    | Stored only for `/admin/` paths, sent over secure HTTPS (note: `httpOnly` can't be set via JavaScript). |
| `hobbies` | Stores stringified JSON of user hobbies.                                                                |

---

## 🧠 Important Notes

- `document.cookie` is how you read/write cookies in the browser.
- Cookies are stored as **key-value** pairs separated by semicolons.
- JavaScript cannot set `HttpOnly` cookies – this must be done on the server-side.
- `secure` cookies are only sent over HTTPS.
- Always `encodeURIComponent()` cookie values to avoid special character issues.

---

## 🔍 Limitations

- Each cookie can only store up to **4KB** of data.
- Browsers limit total number of cookies per domain (\~20-50).
- Cookie data is **automatically sent** with every HTTP request, so avoid storing sensitive or large data.

---

## 🧪 Output Example

```bash
name=anbu%20selvan; age=28; role=admin; hobbies={"reading":"book","singing":"tamil"}
```

---

## 🛡️ Best Practices

- Use `localStorage` or `sessionStorage` for large or client-only data.
- Always encode your values.
- Avoid setting sensitive data on the client side.

---

## 📁 Demo Structure

```text
index.html       # Main HTML file with embedded JS
README.md        # Documentation for cookies in JS
/admin/dashboard.html  # Example target path for the 'role' cookie
```

---

## 📚 Learn More

- [MDN Web Docs - document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [MDN - HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
