```md
# ESM vs CommonJS in Node.js

In Node.js, there are two major module systems used for importing and exporting code: **CommonJS (CJS)** and **ECMAScript Modules (ESM)**. This project demonstrates the difference using a simple file write example.

---

## 🔄 Key Differences

| Feature        | CommonJS (`require`)         | ESM (`import`)                     |
| -------------- | ---------------------------- | ---------------------------------- |
| File Extension | `.js`, `.cjs`                | `.mjs`, or `"type": "module"`      |
| Import Syntax  | `const x = require('x')`     | `import x from 'x'`                |
| Export Syntax  | `module.exports` / `exports` | `export` / `export default`        |
| Loading        | Synchronous                  | Asynchronous (can use `await`)     |
| Compatibility  | Native in Node.js            | Modern, recommended moving forward |

---

## 📁 File Structure
```

project/
├── utils/
│ └── sayHello.cjs
├── index.js
└── README.md

````

---

## 🧠 Example: CommonJS Style

### `utils/sayHello.cjs`

```js
const fs = require('fs');

const libName = 'Greeting';

function writeInfo(text) {
  const output = __dirname + '/hello.txt';
  fs.writeFileSync(output, text);
}

exports.writeInfo = writeInfo;
exports.libName = libName;
````

### `index.js` (also using CommonJS)

```js
const { writeInfo, libName } = require('./utils/sayHello.cjs')

writeInfo('Anbu From CyberDude 2 - ' + libName)
```

---

## ✅ Output

A file `hello.txt` will be created in the same folder as `sayHello.cjs` with the contents:

```
Anbu From CyberDude 2 - Greeting
```

---

## 🔄 ESM Equivalent (Optional)

If converting to ESM:

### `utils/sayHello.mjs`

```js
import fs from 'fs'

export const libName = 'Greeting'

export function writeInfo(text) {
  const output = new URL('./hello.txt', import.meta.url).pathname
  fs.writeFileSync(output, text)
}
```

### `index.mjs`

```js
import { writeInfo, libName } from './utils/sayHello.mjs'

writeInfo('Anbu From CyberDude 2 - ' + libName)
```

---

## 📌 When to Use What?

- Use **CommonJS** if you're working in legacy projects or existing Node.js apps.
- Use **ESM** for modern JavaScript, compatibility with frontend code, or future-proofing.

---

## 📚 Reference

- [Node.js Docs on Modules](https://nodejs.org/api/modules.html)
- [ECMAScript Modules Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
