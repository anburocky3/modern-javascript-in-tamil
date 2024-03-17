**ES6 array destructuring** is a powerful feature in JavaScript that was introduced in ECMAScript 2015 (ES6) that allows you to unpack values from arrays and assign them to individual variables in a more concise and readable way.

Before ES6, developers had to manually select array elements or use loops to extract values. With destructuring, you can achieve the same result more efficiently.

Let's dive into the details:

1.  **Basic Array Destructuring**:

    - You can use array destructuring to unpack elements from an array into separate variables.
    - Example:

      ```javascript
      const scores = [70, 80, 90];
      const [math, physics, chemistry] = scores;

      console.log(math); // 70
      console.log(physics); // 80
      console.log(chemistry); // 90
      ```

    - In this example, the values from the `scores` array are assigned to `math`, `physics`, and `chemistry`.

2.  **Handling Undefined Elements**:

    - If the array has fewer elements than the number of variables, the remaining variables will be `undefined`.
    - Example:

      ```javascript
      const [math, physics, chemistry] = [70, 80]; // chemistry is undefined
      ```

3.  **Skipping Elements:**

    You can choose to ignore specific elements by omitting them from the destructuring pattern.

    ```js
    const scores = [70, 80, 90];
    const [math, , chemistry] = scores;

    console.log(math); // 70
    console.log(chemistry); // 90
    ```

4.  **Discarding Extra Elements**:

    - If the array has more elements than the number of variables, the extra elements are ignored.
    - Example:
      ```javascript
      const [math, physics] = [30, 40, 50]; // 50 is ignored
      ```

5.  **Default Values**:

    - You can provide default values for variables in case the array element is `undefined`.
    - Example:
      ```javascript
      const [name = "Guna", age = 27] = ["Anbu"];
      console.log(name); // 'Anbu'
      console.log(age); // 25 (default value)
      ```

6.  **Rest Syntax**:

    - The rest syntax (`...`) allows you to capture remaining elements into a new array.
    - Example:
      ```javascript
      const [first, second, ...rest] = [1, 2, 3, 4, 5];
      console.log(first); // 1
      console.log(second); // 2
      console.log(rest); // [3, 4, 5]
      ```

7.  **Swapping Variables**:

    - Destructuring makes swapping variables concise:
      ```javascript
      let a = 10;
      let b = 20;
      [a, b] = [b, a]; // Swap values
      console.log(a); // 20
      console.log(b); // 10
      ```

8.  **Nested Array Destructuring**

    ```js
    const [one, two, [three, four], five, [six, seven, eight]] = [
      1,
      2,
      [3, 4],
      5,
      [6, 7, 8],
    ];
    console.log(one, two, three, four, five, six);
    ```

9.  **Array Destructuring on Functions**

    ```js
    function getFullName() {
      return ["Anbu", "Selvan"];
    }

    const [firstName, lastName] = getFullName();

    console.log(firstName); // Output: "Anbu"
    console.log(lastName); // Output: "Selvan"
    ```

10. **On Loops**

    ```js
    const myTeam = [
      ["Vijay", "Dhanush", "vijay@gmail.com"],
      ["Rajini", "Kamal", "rajini@gmail.com"],
      // More rows...
    ];

    for (let row of myTeam) {
      let [firstName, lastName, email] = row;
      console.log(`Email sent to ${firstName} ${lastName} at ${email}`);
    }
    ```

Remember, array destructuring simplifies working with arrays and enhances code readability! 🚀

## Assignment to Practice

1. Display the name of each object in `userDetails` using Array Destructuring using Functions.

```js
const userDetails = [
  {
    id: 1,
    name: "Aakash",
    isAlive: true,
  },
  {
    id: 2,
    name: "Bala",
    isAlive: false,
  },
  {
    id: 3,
    name: "Celine",
    isAlive: true,
  },
];

// Solution
const [aakash, bala, celine] = userDetails;

console.log(aakash.id, bala.name, celine.isAlive);
```

2.  Use destructuring to extract info from this `API responses`

```js
const response = {
  status: 200,
  data: ["apple", "banana", "orange"],
};

const {
  data: [firstFruit, secondFruit, thirdFruit],
} = response;

console.log(firstFruit); // Output: apple
console.log(secondFruit); // Output: banana
console.log(thirdFruit); // Output: orange
```
