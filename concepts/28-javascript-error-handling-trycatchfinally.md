# Error Handling (try...catch...finally)

Error handling is crucial for building robust applications. It helps gracefully handle unexpected issues without crashing the entire program. The examples here demonstrate:

1. Catching and handling errors during runtime.
2. Ensuring cleanup operations with `finally`.
3. Throwing custom errors to indicate specific problems.

---

### Example 1: Basic Error Handling

```javascript
try {
  console.log('works')
  console.lag('Some') // Intentional error
  // throw 'Something is not right!';
  // throw new Error('Error Instance');
} catch (error) {
  console.info('Error caught:', error)
  // console.log(typeof error); // "object"
  // console.log(error.name); // "Error"
  // console.log(error.message); // "Error Instance"
  // console.log(error.stack); // Detailed stack trace
} finally {
  console.log('finally')
}
```

#### Key Points:

1. **`try` block**: Contains code that may throw an error.
2. **`catch` block**: Executes if an error is thrown. It captures the error in the `error` parameter.
3. **`finally` block**: Executes after `try` and `catch`, regardless of whether an error was thrown. Useful for cleanup tasks.

---

### Example 2: Parsing JSON with Custom Error

```javascript
try {
  const json = '{ "name": "Anbu", "age": 28 }'
  const user = JSON.parse(json)
  console.log('Showing the UI: ', user.name)

  if (user.isAlive === undefined) {
    // throw 'IsAlive is not available';
    throw new Error('IsAlive is not available')
  }
} catch (error) {
  console.error(error.stack)
}

console.log('Everything finished! good bye!')
```

#### Key Points:

1. Parsing JSON using `JSON.parse` can fail if the input is invalid.
2. A custom error is thrown if the `isAlive` property is missing.
3. Errors are logged using `console.error` with a stack trace for debugging.

---

### Example 3: Variations of `try` Constructs

#### `try...catch`

```javascript
try {
  // Code that may throw an error
} catch {
  // Handle the error
}
```

- Executes the `catch` block only if an error occurs.

#### `try...finally`

```javascript
try {
  // Code that may throw an error
} finally {
  // Cleanup operations (always executes)
}
```

- Use `finally` when you need to guarantee the execution of cleanup code, even if no error occurs.

#### `try...catch...finally`

```javascript
try {
  // Code that may throw an error
} catch {
  // Handle the error
} finally {
  // Cleanup operations (always executes)
}
```

- Combines error handling (`catch`) with guaranteed cleanup (`finally`).

---

## Summary

These examples highlight the flexibility of JavaScript's error-handling structures. Effective use of `try`, `catch`, and `finally` ensures that your application remains stable and user-friendly even when encountering unexpected issues.
