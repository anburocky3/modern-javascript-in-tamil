```markdown
# 📦 ES Modules in JavaScript — Practical Example

This project demonstrates how to use **ES6 Modules (ESM)** in a modern JavaScript application. It includes examples of:

- ✅ Named & default exports
- ✅ Dynamic imports (`import()`)
- ✅ Practical module structure (toast notifications, logger, math)
- ✅ Conditional loading of modules

---

## 🔧 Project Structure
```

.
├── index.html
├── main.js
└── utils/
├── toast.js
├── logger.js
└── math.js

````

---

## 🚀 Features Covered

### 1. **Importing Modules**

```js
import toast from './utils/toast.js';
import logger from './utils/logger.js';
````

### 2. **Dynamic Import (Code Splitting)**

```js
if (admin_role === 1) {
  const mathModule = await import('./utils/math.js')
  console.log(mathModule)
}
```

✅ This ensures `math.js` is **only loaded when needed**, improving performance.

---

## 📁 Module Details

### `utils/toast.js`

Handles DOM-based toast messages when a button is clicked.

```js
function displayToast(message) {
  const buttonEl = document.querySelector('#sayHello')

  buttonEl.addEventListener('click', () => {
    const divEl = document.createElement('div')
    divEl.className = 'bg-blue-100 text-blue-500 p-10 rounded mt-3'
    divEl.textContent = message

    const resultDiv = document.querySelector('#result')
    resultDiv.append(divEl)
  })
}

export default displayToast
```

---

### `utils/logger.js`

Logs a message with a timestamp.

```js
function log(message) {
  const time = new Date().toLocaleTimeString()
  console.log(`${time} - ${message}`)
}

export default log
```

---

### `utils/math.js`

Demonstrates both named and default exports.

```js
const libraryName = 'Math'

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

export { libraryName, add, subtract }
```

---

## ✅ Usage Example

```js
toast('Hello Anbu, from CyberDude')
logger('Page loaded!')

const admin_role = 0

if (admin_role === 1) {
  const mathModule = await import('./utils/math.js')
  console.log(mathModule)
} else {
  console.log('MathModule doesn’t run!')
}
```

---

## 📌 Learning Objectives

- Understand `export` vs `export default`
- Use dynamic imports for conditional/module-based logic
- Build modular, maintainable JavaScript applications
- Avoid polluting global scope

---

## 📚 References

- [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [MDN: Dynamic import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)

```

```
