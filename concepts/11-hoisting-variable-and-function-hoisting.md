### JavaScript Hoisting Explained

**JavaScript hoisting** refers to the behavior in which variable and function declarations are moved, or "hoisted," to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables and functions before they are declared in the code.

#### Variable Hoisting

In JavaScript, variables declared using `var` are hoisted to the top of their function or global scope. However, only the declaration is hoisted, not the initialization.

```js
// ❌
channel = 'CyberDude'

var channel = 'CyberDude Networks'

// ✅
let channel = 'CyberDude'
channel = 'CyberDude Networks'

console.log(channel)
```

Variables declared with `let` and `const` are also hoisted, but they are not initialized until their declaration is evaluated. This means they are in a "temporal dead zone" from the start of the block until the declaration is encountered.

```javascript
console.log(b) // ReferenceError: Cannot access 'b' before initialization
let b = 20
console.log(b) // 20
```

In this example, `let b;` is hoisted, but accessing `b` before its declaration results in a ReferenceError.

#### Function Hoisting

Function declarations are fully hoisted, including both the declaration and the definition.

```javascript
sayHello() // can call from anywhere

function sayHello() {
  console.log('Hello CyberDude')
}
```

Here, the entire function `sayHello` is hoisted to the top, so it can be called before its declaration.

However, function expressions are not hoisted.

```javascript
sayHelloExpression() // TypeError: sayHelloExpression is not a function

const sayHelloExpression = () => {
  console.log('Hello CyberDude - Expression')
}
```

In this case, the variable `bar` is hoisted, but its assignment to the function expression is not. Thus, `bar` is `undefined` when it is first called.

### Summary

- **Variable hoisting** with `var` only hoists the declaration, not the initialization.
- **Variables** declared with `let` and `const` are hoisted but remain in a temporal dead zone until their initialization.
- **Function declarations** are fully hoisted, including both the declaration and the definition.
- **Function expressions** are not hoisted; only the variable declaration is hoisted, not the assignment.

Understanding hoisting helps avoid bugs related to variable and function declarations and ensures that your code behaves as expected.
