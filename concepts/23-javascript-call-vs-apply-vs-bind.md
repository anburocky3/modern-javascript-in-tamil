# Function Prototype Methods in JavaScript (call vs apply vs bind)

This document explains the JavaScript code that demonstrates the usage of `Function.prototype.call()`, `Function.prototype.apply()`, and `Function.prototype.bind()`. These methods are used to control the `this` context of functions, pass arguments, and invoke functions in different ways.

## Overview

The code demonstrates three main ways to invoke functions while managing the `this` context and arguments:

1. **`call()`**: Invokes a function with a specified `this` value and individual arguments.
2. **`apply()`**: Invokes a function with a specified `this` value and arguments passed as an array (or array-like object).
3. **`bind()`**: Returns a new function that, when called, has its `this` set to a specific value and optionally accepts preset arguments.

## Code Explanation

### 1. **Creating a Function with `Function` Constructor**

In the first part of the code, we create a function `printName` using the `Function` constructor:

```javascript
const printName = new Function(
  'firstName',
  'lastName',
  'return `Hello ${firstName} ${lastName},`'
)

console.log(printName('Anbu', 'Selvan'))
```

- `Function` constructor allows dynamic creation of functions. The parameters `firstName` and `lastName` are passed to the function, and the return value is a string with those variables.
- The result is `"Hello Anbu Selvan,"`.

### 2. **Using `Function.prototype.call()`**

The `call()` method is used to invoke a function with a specified `this` context and individual arguments.

```javascript
const result = greetName.call({ favColor: 'red' }, 'Anbu', 'Selvan')
const result2 = greetName.call(null, 'Jenika', 'Selvan')
```

- **`greetName.call({ favColor: 'red' }, 'Anbu', 'Selvan')`**: The function `greetName` is invoked with the `this` context set to `{ favColor: 'red' }`, and the arguments `'Anbu'` and `'Selvan'` are passed individually. The result is `"Hello Anbu Selvan, red"`.
- **`greetName.call(null, 'Jenika', 'Selvan')`**: The function is called with `this` set to `null`, and the result is `"Hello Jenika Selvan, "` because `favColor` is undefined in this case.

### 3. **Using `Function.prototype.apply()`**

The `apply()` method is similar to `call()`, but the arguments are passed as an array (or array-like object).

```javascript
const result2 = Math.min.apply(null, numbers)
```

- **`Math.min.apply(null, numbers)`**: `Math.min` is invoked with `this` set to `null`, and the `numbers` array is passed as the arguments. The result is `1`, the smallest number in the array.

### 4. **Using `Function.prototype.bind()`**

The `bind()` method returns a new function that has a predefined `this` context and optionally preset arguments.

```javascript
const result3 = Math.min.bind(null, ...numbers)
```

- **`Math.min.bind(null, ...numbers)`**: The `bind()` method is used to create a new function that is bound with the `this` value set to `null` and the `numbers` array spread as individual arguments. When `result3()` is called, it returns the smallest number, `1`.

### Example Output

Here is the expected output from running the code:

```javascript
// Result of printName
console.log(printName('Anbu', 'Selvan')) // Output: "Hello Anbu Selvan,"

// Result of greetName using call()
console.log(result) // Output: "Hello Anbu Selvan, red"
console.log(result2) // Output: "Hello Jenika Selvan,"

// Result of Math.min using call() and apply()
console.log('using call()', result) // Output: -Infinity (since `this` is null for Math.min with no arguments passed)
console.log('using apply()', result2) // Output: 1

// Result of Math.min using bind()
console.log('using bind()', result3()) // Output: 1
```

### Summary of Methods

#### 1. **`call()`**

- **Purpose**: Invokes a function with a specified `this` value and individual arguments.
- **Syntax**: `function.call(thisArg, arg1, arg2, ...)`
- **Usage**: Use `call()` when you need to invoke a function immediately with a fixed `this` context and pass arguments individually.

#### 2. **`apply()`**

- **Purpose**: Invokes a function with a specified `this` value and arguments passed as an array.
- **Syntax**: `function.apply(thisArg, [argsArray])`
- **Usage**: Use `apply()` when you want to pass arguments as an array to a function, or if the number of arguments is dynamic.

#### 3. **`bind()`**

- **Purpose**: Returns a new function that, when invoked, has its `this` context and arguments pre-set.
- **Syntax**: `function.bind(thisArg, arg1, arg2, ...)`
- **Usage**: Use `bind()` when you need to create a new function with a predefined `this` context and preset arguments.

## Conclusion

- **`call()`** and **`apply()`** are used to invoke functions with a specific `this` value, but **`apply()`** passes arguments as an array while **`call()`** passes arguments individually.
- **`bind()`** returns a new function with a fixed `this` context and optional arguments that can be invoked later.

By understanding these methods, you can have greater control over how functions are invoked and how the `this` context is managed.
