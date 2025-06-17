```markdown
# JSON Tutorial in JavaScript

Welcome to this hands-on JSON tutorial in JavaScript, explained in **Tamil**. In this session, we explore how to work with JSON both locally and from the internet using **Fetch API**.

This tutorial demonstrates:

- How to read JSON from local files
- How to fetch JSON from APIs
- How to parse and display JSON data in the browser

---

## 📁 Project Structure
```

project/
│
├── index.html
├── script.js
└── assets/
└── data/
└── friends.json

````

---

## 📦 Sample JSON: `friends.json`

```json
[
  { "name": "Trisha" },
  { "name": "Jenika" },
  { "name": "Meera" }
]
````

---

## 🔍 Example 1: Reading JSON Locally

```js
const friendsData = fetch("/assets/data/friends.json");

friendsData
  .then((response) => response.json())
  .then((friendsData) => {
    const resultDivEl = document.querySelector("#result");

    friendsData.map((friends) => {
      return (resultDivEl.innerText += friends.name);
    });
  });
```

👉 This reads a local JSON file and displays the names on the page.

---

## 🌐 Example 2: Fetching JSON from an API

```js
const quotesAPI = fetch("https://mimic-server-api.vercel.app/quotes/1");

quotesAPI
  .then((res) => res.json())
  .then((quote) => {
    const quoteEl = document.querySelector("#quote");
    const authorEl = document.querySelector("#author");

    quoteEl.textContent = quote.quote;
    authorEl.innerText = quote.author;
    console.log(quote);
  });
```

👉 This calls an internet API and displays a quote and its author dynamically.

---

## 🧠 What You’ll Learn

- Difference between JSON & JavaScript objects
- JSON syntax and structure
- Using `fetch()` to load JSON
- Converting JSON strings to objects with `.json()`
- Updating DOM elements with JSON data
- API integration in JavaScript projects

---

## 🎓 Who Is This For?

- Beginners learning JavaScript and JSON
- Tamil-speaking developers new to web development
- Students preparing for interviews involving API or JSON questions

---

## 📌 Watch Full Video

👉 [Watch on YouTube](https://youtu.be/oj8oF6RnUZ8)
📍 Title: `JSON Tutorial from Scratch in Tamil`

```

```
