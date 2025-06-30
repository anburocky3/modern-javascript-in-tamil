```markdown
# SessionStorage Background Color Picker

This project demonstrates how to use **`sessionStorage`** in JavaScript to remember a user's background color selection **for the duration of the browser session**.

## 🧠 What You'll Learn

- How to access DOM elements with JavaScript
- How to use `sessionStorage` to store temporary data
- How to persist UI state (color) during a browser session
- TailwindCSS integration for styling (optional in this example)

---

## 🚀 Live Example

When you open this page in your browser:

1. You'll see a color input.
2. Choose any color — the page background changes instantly.
3. Refresh the page — the background color remains the same **during the same session**.
4. Close the tab or browser — the background color resets on the next session.

---

## 📁 Project Structure
```

project-folder/
├── index.html
├── assets/
│ └── js/
│ └── main.js

````

---

## 📜 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Visitor</title>
  <!-- TailwindCSS (for future styling) -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
  <input type="color" id="color" />
  <h1>SessionStorage</h1>

  <script src="./assets/js/main.js"></script>
</body>
</html>
````

---

## 💡 main.js

```js
const colorInput = document.querySelector('#color')

// Check if a color is already saved in sessionStorage
const ifColorCodeExist = sessionStorage.getItem('color')

if (ifColorCodeExist) {
  document.documentElement.style.backgroundColor = ifColorCodeExist
  colorInput.value = ifColorCodeExist
}

// Update color and sessionStorage when user changes the color
colorInput.addEventListener('change', (event) => {
  const colorCode = event.target.value
  document.documentElement.style.backgroundColor = colorCode
  sessionStorage.setItem('color', colorCode)
})
```

---

## ❓ Why `sessionStorage`?

- **sessionStorage** keeps data **only for the current tab/session**.
- When the tab is closed, all session data is cleared.
- Ideal for **temporary UI preferences** like theme, filters, steps in forms, etc.

---

## 🔧 Future Improvements

- Add Tailwind styles for better UI.
- Display selected color code as text.
- Add a reset button to clear the session.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

```

```
