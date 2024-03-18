// 1. Function Declaration
function sum(a, b) {
  console.log(a + b);
}

sum(5, 5); // outputs: 10

// 2. Function Expression
const sum = function sum(a, b) {
  console.log(a + b);
};

sum(10, 2); // outputs: 12

// 3. Anonymous Functions
const sum = function (a, b) {
  console.log(a + b);
};

sum(10, 2); // outputs: 12

// 4. Arrow Functions
const sum = (a, b) => {
  console.log(a + b);
};

sum(10, 2); // outputs: 12

// ## Array functions with examples!

// 1. **Simple Arrow Function:**
const greet = () => console.log("Hello, World!");

greet(); // Output: "Hello, World!"

// This arrow function takes no arguments and simply logs a greeting to the console.

// 2. **Arrow Function with Single Argument:**
const square = (x) => x * x;

console.log(square(5)); // Output: 25

// This arrow function takes a single argument and returns the square of it. When there is only one argument, you can omit the parentheses around the parameter.

// 3. **Arrow Function with Multiple Arguments:**
let sum = (a, b) => a + b;

console.log(sum(5, 3)); // Output: 8

// This arrow function takes two arguments and returns their sum. When there are multiple arguments, you need to include parentheses around the parameters.

// 4. **Arrow Function with a Block Body:**
let sum = (a, b) => {
  let result = a + b;
  return result;
};

console.log(sum(5, 3)); // Output: 8

// If the body of the function has more than one expression, you need to use curly braces `{}` and explicitly write a `return` statement.

// 5. **Arrow Function in Object Method:**

const person = {
  firstName: "Anbu",
  lastName: "Selvan",
  fullName: () => `${this.firstName} ${this.lastName}`,
};

console.log(person.fullName());

// 6. **Arrow Function as a Callback:**

// Arrow functions are often used as callbacks in functions like `map`, `filter`, `reduce` etc.
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((x) => x * x);

console.log(squares); // Output: [1, 4, 9, 16, 25]

// 7. **Returning object literals in Arrow Functions**
//    Returning object literals using the expression body syntax `(params) => { object: literal }` does not work as expected. To fix this, wrap the object literal in parentheses:

const mobileInfo = () => ({ id: 1, name: "POCO" });

console.log(mobileInfo());

// ## Practical examples:
// 1. `setTimeOut()`
// 2. `array.prototype.map()`, etc.
