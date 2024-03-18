**Arrow functions** (also known as fat arrow functions) were introduced in ECMAScript 2015 (ES6) and provide a concise way to write functions in JavaScript.

They utilize the => syntax, and they have a few different syntax options depending on the situation.

Let’s explore their syntax and usage:

Before that, you need learn about

1. Function Declaration

```js
function sum(a, b) {
  console.log(a + b);
}

sum(5, 5); // outputs: 10
```

2. Function Expression

```js
const sum = function sum(a, b) {
  console.log(a + b);
};

sum(10, 2); // outputs: 12
```

> You should only call divide after intializing divide variable. It's because of Hoisting.

3. Anonymous Functions

```js
const sum = function (a, b) {
  console.log(a + b);
};

sum(10, 2); // outputs: 12
```

> Since it has no name, it is aclled us Anonymous function.

4. Arrow Functions

```js
const sum = (a, b) => {
  console.log(a + b);
};

sum(10, 2); // outputs: 12
```

## Array functions with examples!

1. **Simple Arrow Function:**

```javascript
const greet = () => console.log("Hello, World!");

greet(); // Output: "Hello, World!"
```

This arrow function takes no arguments and simply logs a greeting to the console.

2. **Arrow Function with Single Argument:**

```javascript
const square = (x) => x * x;

console.log(square(5)); // Output: 25
```

This arrow function takes a single argument and returns the square of it. When there is only one argument, you can omit the parentheses around the parameter.

3. **Arrow Function with Multiple Arguments:**

```javascript
let sum = (a, b) => a + b;

console.log(sum(5, 3)); // Output: 8
```

This arrow function takes two arguments and returns their sum. When there are multiple arguments, you need to include parentheses around the parameters.

4. **Arrow Function with a Block Body:**

```javascript
let sum = (a, b) => {
  let result = a + b;
  return result;
};

console.log(sum(5, 3)); // Output: 8
```

If the body of the function has more than one expression, you need to use curly braces `{}` and explicitly write a `return` statement.

5. **Arrow Function in Object Method:**

```js
const person = {
  firstName: "Anbu",
  lastName: "Selvan",
  fullName: () => `${this.firstName} ${this.lastName}`,
};

console.log(person.fullName());
```

6. **Arrow Function as a Callback:**

Arrow functions are often used as callbacks in functions like `map`, `filter`, `reduce` etc.

```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((x) => x * x);

console.log(squares); // Output: [1, 4, 9, 16, 25]
```

7. **Returning object literals in Arrow Functions**
   Returning object literals using the expression body syntax `(params) => { object: literal }` does not work as expected. To fix this, wrap the object literal in parentheses:

```js
const mobileInfo = () => ({ id: 1, name: "POCO" });

console.log(mobileInfo());
```

This map function takes each number in the array, squares it, and creates a new array with the results.

**Note:** Arrow functions do not have their own `this` value. The value of `this` inside an arrow function remains the same throughout the lifecycle of the function and is always equal to the value of `this` in the closest non-arrow parent function. This makes them unsuitable for methods (functions defined inside objects) if you plan to use `this` to access the object's properties.

## Practical examples:

1. `setTimeOut()`
2. `array.prototype.map()`, etc.
