# Promise API

This document provides explanations and usage examples of the various `Promise` methods in JavaScript, including `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()`.

---

## 1. `Promise.all()`

The `Promise.all()` method accepts an iterable (usually an array) of promises and returns a single `Promise`. This `Promise` resolves when all of the promises in the iterable are resolved, or it rejects as soon as one of the promises is rejected.

### Syntax

```js
Promise.all(iterable)
```

### Parameters

- **iterable**: An iterable object, such as an array, where each element is a `Promise` or a value. If the value is not a `Promise`, it will be treated as a resolved `Promise`.

### Return Value

A `Promise` that resolves to an array of values, one for each promise, in the same order as they appear in the iterable. If any of the promises reject, the returned promise is immediately rejected with the reason of the first promise that rejects.

### Example

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Okay, I got the value')
})

const p2 = Promise.resolve('promise2')

const p3 = 123456

const p4 = Promise.reject('Rejected')

Promise.all([p1, p2, p3, p4])
  .then((responses) => {
    console.log('responses:', responses)
  })
  .catch((error) => {
    console.error('Error:', error) // Error: Rejected
  })
```

- **Note**: Even though `p3` is not a promise, it is automatically wrapped in a resolved promise by `Promise.all()`. However, `p4` is rejected, causing the entire promise to reject.

---

## 2. `Promise.allSettled()`

The `Promise.allSettled()` method accepts an iterable of promises and returns a `Promise` that resolves after all of the given promises have either fulfilled or rejected. This method does not short-circuit, unlike `Promise.all()`, and it provides the outcome of each promise, regardless of whether they resolved or rejected.

### Syntax

```js
Promise.allSettled(iterable)
```

### Parameters

- **iterable**: An iterable object, such as an array, where each element is a `Promise` or a value.

### Return Value

A `Promise` that resolves to an array of objects, where each object describes the outcome of each promise. Each object will have the following properties:

- **status**: Either `"fulfilled"` if the promise was resolved, or `"rejected"` if the promise was rejected.
- **value**: The resolved value, if the promise was fulfilled.
- **reason**: The rejection reason, if the promise was rejected.

### Example

```js
const promise1 = Promise.resolve('Anbu')
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'API Error')
)

Promise.allSettled([promise1, promise2])
  .then((response) => {
    response.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log('Scores alloted!', result.value)
      } else {
        console.log('Rejected:', result.reason)
      }
    })

    console.log('All responses:', response)
  })
  .catch((error) => {
    console.error('Error:', error)
  })
```

**Output:**

```
Scores alloted! Anbu
Rejected: API Error
All responses: [
  { status: 'fulfilled', value: 'Anbu' },
  { status: 'rejected', reason: 'API Error' }
]
```

---

## 3. `Promise.race()`

The `Promise.race()` method accepts an iterable of promises and returns a `Promise` that resolves or rejects as soon as the first promise in the iterable resolves or rejects. The result is based on the first promise that settles.

### Syntax

```js
Promise.race(iterable)
```

### Parameters

- **iterable**: An iterable object (e.g., an array) containing promises.

### Return Value

A `Promise` that resolves or rejects as soon as the first promise in the iterable resolves or rejects. If any promise in the iterable rejects, the returned promise will reject with that rejection reason.

### Example

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('one'), 500)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('two'), 100)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Something went wrong'), 2000)
})

Promise.race([promise1, promise2, promise3])
  .then((response) => {
    console.log('response', response) // Output: response two
  })
  .catch((error) => {
    console.error('Error', error)
  })
```

**Note**: In this example, the second promise (`promise2`) resolves first, so `response` will be `'two'`.

---

## 4. `Promise.any()` - ES12

The `Promise.any()` method takes an iterable of promises and returns a `Promise` that resolves as soon as any of the promises resolves. If all promises are rejected, the returned promise is rejected with an `AggregateError`.

### Syntax

```js
Promise.any(iterable)
```

### Parameters

- **iterable**: An iterable object containing promises.

### Return Value

A `Promise` that resolves as soon as any promise in the iterable resolves. If all promises are rejected, it rejects with an `AggregateError`.

### Example

```js
const promise1 = Promise.reject(0)

const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'quick')
})

const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'slow')
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Something went wrong'), 50)
})

Promise.any([promise1, promise2, promise3, promise4])
  .then((response) => {
    console.log('Response', response) // Output: Response quick
  })
  .catch((error) => {
    console.error('Error', error)
  })
```

**Note**: In this example, `promise2` is the first to resolve, so the result is `'quick'`. If all promises had been rejected, the `catch` block would have been executed.

---

### Summary of Differences

| Method                 | Resolves when                               | Rejects when                                | Use case                                                             |
| ---------------------- | ------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| `Promise.all()`        | All promises resolve                        | Any promise rejects                         | Use when all promises must succeed.                                  |
| `Promise.allSettled()` | All promises settle (fulfilled or rejected) | Never rejects                               | Use when you want the result of all promises, regardless of outcome. |
| `Promise.race()`       | First promise resolves or rejects           | First promise rejects                       | Use when you need the first promise to settle.                       |
| `Promise.any()`        | First promise resolves                      | All promises reject (with `AggregateError`) | Use when you need the first successful promise.                      |
