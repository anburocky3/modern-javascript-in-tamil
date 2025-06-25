```markdown
# 🌗 LocalStorage Theme Toggle with TailwindCSS

This project demonstrates how to use the **`localStorage` API** in JavaScript to persist a user's preferred **light or dark theme**, even after the browser is closed and reopened.

---

## 🚀 Features

- Dark/Light mode toggle button.
- Theme preference saved in `localStorage`.
- TailwindCSS-based responsive design.
- Preference is automatically applied on page load.

---

## 🧠 What You'll Learn

- How to store and retrieve data using `localStorage`.
- How to toggle CSS class based on state.
- How to enhance user experience with persistent settings.
- TailwindCSS integration for styling modern UIs.

---

## 📁 Project Structure
```

project-folder/
├── index.html
└── assets/
└── js/
└── main.js (optional, if you expand logic)

````

---

## 📜 index.html (Overview)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Modern Javascript</title>

  <!-- TailwindCSS via CDN -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

  <style type="text/tailwindcss">
    @import 'tailwindcss';
    @custom-variant dark (&:where(.dark, .dark *));
  </style>
</head>
<body class="p-10 bg-blue-50 dark:bg-blue-950">
  <button onclick="toggleTheme()" class="px-3 py-2 rounded bg-yellow-500 text-black float-right text-sm font-semibold">
    Toggle Theme
  </button>

  <div class="bg-blue-100 dark:bg-blue-800 p-10 rounded">
    <h1 class="font-semibold text-xl mb-3 dark:text-white">Browser Storage API</h1>
    <p class="dark:text-white">We are learning Storage in Javascript!</p>
  </div>

  <script>
    const html = document.documentElement

    // Load theme from localStorage on page load
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }

    // Toggle theme and save preference
    function toggleTheme() {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      } else {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      }
    }
  </script>
</body>
</html>
````

---

## ❓ Why Use `localStorage`?

- Saves user data **across browser sessions**.
- Unlike `sessionStorage`, data is not lost when the browser/tab is closed.
- Ideal for saving:

  - Theme preferences
  - Language settings
  - Recently visited pages
  - Form drafts

---

## 🧪 How to Test It

1. Open the page in a browser.
2. Click **"Toggle Theme"** to switch between light and dark.
3. Refresh the page — the selected theme persists.
4. Close and reopen the browser — it still remembers the theme.

---

## 🔧 Possible Enhancements

- Add icon-based toggle (🌞 / 🌙).
- Provide a reset-to-default option.
- Save other preferences like font size, layout, etc.

```

```
