## Callback Functions

Certainly! A callback function in JavaScript is a function that is passed into another function as an argument to be executed later. Here are several examples demonstrating how callback functions can be used:

```js
function handleGoodBye(myName) {
  setTimeout(() => {
    console.log('GoodBye ' + myName)
  }, 3000)
}

function greetUser(name, callback) {
  const myName = name.toUpperCase()

  console.log('My name is ' + myName)

  callback(myName)
}

greetUser('Anbu', handleGoodBye)
```

## Another Example

```js
const medicine = () => {
  console.log(`D: You will be alright! Take these medicines. Take Care`)
}

const doSomeWork = () => {
  setTimeout(medicine, 3000)
}

const callDoctor = (callerName, doSomeWork) => {
  console.log(`D: Hi ${callerName} I'm the doctor, how can i help you?`)

  doSomeWork()
}

function help(name) {
  console.log('U: Hello ' + name)

  setTimeout(callDoctor, 1000, name, doSomeWork)
}

// help('Anbu')

help('Trisha')
```

### 1. Simple Callback Example

```javascript
function greet(name, callback) {
  console.log('Hello ' + name)
  callback()
}

function sayGoodbye() {
  console.log('Goodbye!')
}

greet('Anbu', sayGoodbye)
// Output:
// Hello Anbu
// Goodbye!
```

### 2. Using Callbacks with Array Methods

#### `forEach`

```javascript
const array = [1, 2, 3, 4, 5]

array.forEach(function (element) {
  console.log(element)
})
// Output: 1 2 3 4 5
```

#### `map`

```javascript
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(function (num) {
  return num * 2
})

console.log(doubled)
// Output: [2, 4, 6, 8, 10]
```

### 3. Callback in Asynchronous Functions

#### Using `setTimeout`

```javascript
function sayHello() {
  console.log('Hello!')
}

setTimeout(sayHello, 1000)
// Output after 1 second: Hello!
```

#### Using Promises

```javascript
function asyncFunction(callback) {
  setTimeout(function () {
    console.log('Async operation completed.')
    callback()
  }, 2000)
}

function callbackFunction() {
  console.log('Callback function executed.')
}

asyncFunction(callbackFunction)
// Output after 2 seconds:
// Async operation completed.
// Callback function executed.
```

### 4. Callback with Event Listeners

```javascript
document.getElementById('myButton').addEventListener('click', function () {
  alert('Button was clicked!')
})
```

### 5. Callback in jQuery

```javascript
$(document).ready(function () {
  $('#myButton').click(function () {
    alert('Button was clicked!')
  })
})
```

### 6. Chaining Callbacks

```javascript
// Chaining Callbacks

function first(callback) {
  setTimeout(() => {
    console.log('running: first')

    callback()
  }, 3000)
}

function second(callback) {
  setTimeout(() => {
    console.log('running: second')

    callback()
  }, 3000)
}

function third() {
  setTimeout(() => {
    console.log('running: third')
  }, 3000)
}

first(() => second(() => third()))

// second()

// third()
```

These examples cover various scenarios where callback functions are commonly used in JavaScript, ranging from simple function calls to handling asynchronous operations and event handling.
