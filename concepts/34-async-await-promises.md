# async & await

In JavaScript, `async` and `await` are used to handle asynchronous code in a way that makes it easier to read and understand, compared to using `Promises` with `.then()` and `.catch()`.

Let’s break down the core concepts and how they work together:

---

### `async` Function

The `async` keyword is used to define a function that always returns a **Promise**. This makes it possible to use the `await` keyword inside it to pause execution of the function until a Promise is resolved or rejected.

- An `async` function always returns a **Promise**, even if it doesn’t explicitly return one.
- If an `async` function returns a non-Promise value (like a string, number, object, etc.), it is automatically wrapped in a resolved Promise.

#### Example:

```javascript
async function getUser() {
  return 'Anbu'
}
```

- The `getUser` function is marked as `async`, meaning it will return a **Promise**.
- Even though the function is returning a string (`'Anbu'`), JavaScript will automatically wrap that value in a resolved Promise.

This means:

```javascript
getUser().then((result) => {
  console.log(result) // Output: 'Anbu'
})
```

The output will still be `'Anbu'`, but it's now wrapped inside a resolved Promise. Essentially, it behaves as if the function were returning `Promise.resolve('Anbu')`.

---

### `await` Keyword

The `await` keyword can only be used **inside an `async` function**. It pauses the execution of the `async` function until the **Promise** passed to it is settled (either resolved or rejected).

- When you use `await`, it waits for the Promise to resolve and returns the resolved value.
- If the Promise is rejected, an error is thrown, and you can catch it using `try`/`catch`.

#### Example:

```javascript
async function getUser() {
  return 'Anbu'
}

async function displayUser() {
  const user = await getUser()
  console.log(user) // Output: 'Anbu'
}

displayUser()
```

Explanation:

1. `getUser()` is an `async` function that returns a resolved Promise containing `'Anbu'`.
2. In `displayUser()`, the `await` keyword waits for the `getUser()` function to resolve, and then it logs the resolved value `'Anbu'`.

---

### How `async` and `await` Work Together

- The `async` function is used to define a function that will return a **Promise**.
- The `await` keyword is used to pause the execution of the `async` function and wait for a **Promise** to resolve.
- This makes it much easier to handle asynchronous operations without needing to manually chain `.then()` and `.catch()`.

---

### Practical Example with an API

This code is designed to simulate the process of fetching a user's data, retrieving their subscriptions (like Hotstar, Prime, etc.), and calculating the total cost based on the number of subscriptions. It involves asynchronous operations handled with JavaScript `Promises` and the `async/await` pattern.

### Workflow:

1. **Fetch User Information by ID**: Retrieve user details (in this case, just the user ID and name).
2. **Fetch Subscriptions**: Once the user data is obtained, fetch a list of subscriptions the user has (e.g., Hotstar, Prime, etc.).
3. **Calculate Total Cost**: Compute the total cost of the subscriptions by counting them and multiplying by a fixed rate (100 per subscription in this example).

## Code Explanation

### Functions:

1. **getUserId(id)**

   - **Purpose**: Simulates fetching user details based on an ID.
   - **Parameters**:
     - `id` (number): The user ID to fetch.
   - **Returns**: A `Promise` that resolves with an object containing the user `id` and `name`.
   - **Simulation**: Uses `setTimeout` to mimic an asynchronous API call.

   ```javascript
   function getUserId(id) {
     return new Promise((resolve, reject) => {
       console.log('Got UserID:', id)
       setTimeout(() => {
         resolve({ id: id, name: 'Anbu' })
       }, 1000)
     })
   }
   ```

2. **getSubscriptions(userInfo)**

   - **Purpose**: Simulates fetching subscriptions for the user.
   - **Parameters**:
     - `userInfo` (Object): The user information object obtained from `getUserId()`.
   - **Returns**: A `Promise` that resolves with an array of subscription objects.
   - **Simulation**: Uses `setTimeout` to simulate the delay in fetching subscriptions.

   ```javascript
   function getSubscriptions(userInfo) {
     return new Promise((resolve, reject) => {
       console.log('Got User subscriptions for ', userInfo)
       setTimeout(() => {
         resolve([
           { id: 1, title: 'Hotstar' },
           { id: 2, title: 'Prime' },
           { id: 3, title: 'Sunnxt' },
         ])
       }, 2000)
     })
   }
   ```

3. **calculateCost(subscriptions)**

   - **Purpose**: Simulates the cost calculation based on the number of subscriptions.
   - **Parameters**:
     - `subscriptions` (Array): An array of subscription objects.
   - **Returns**: A `Promise` that resolves with the total cost calculated as `subscriptions.length * 100`.
   - **Simulation**: Uses `setTimeout` to simulate the delay in calculating the total cost.

   ```javascript
   function calculateCost(subscriptions) {
     console.log('Subscriptions:', subscriptions)
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(subscriptions.length * 100)
       }, 3000)
     })
   }
   ```

4. **displayTotalCost()**

   - **Purpose**: Orchestrates the sequence of operations: fetching user data, fetching subscriptions, and calculating the cost. It handles all the asynchronous operations using `async/await` and manages errors using `try/catch`.
   - **Workflow**:
     - Fetches the user details with `getUserId(1)`.
     - Retrieves subscriptions using the user data.
     - Calculates the total cost of the subscriptions.
   - **Error Handling**: Any error that occurs during the process is caught and logged.

   ```javascript
   async function displayTotalCost() {
     try {
       const userInfo = await getUserId(1)
       const subscriptions = await getSubscriptions(userInfo)
       const totalCost = await calculateCost(subscriptions)

       console.log(totalCost)
       console.log('Everything is fetched!')
     } catch (error) {
       console.error('CATCH:', error)
     }
   }
   ```

### Main Flow

```javascript
displayTotalCost()
```

- This function is executed to kick off the entire flow of fetching data and calculating the total subscription cost. It will log:
  - The total cost of subscriptions.
  - A message confirming that everything is fetched.
  - Any error that occurs during the process.

### Output

If everything works as expected, the output will be:

```bash
Got UserID: 1
Got User subscriptions for  { id: 1, name: 'Anbu' }
Subscriptions: [ { id: 1, title: 'Hotstar' }, { id: 2, title: 'Prime' }, { id: 3, title: 'Sunnxt' } ]
300
Everything is fetched!
```

If an error occurs during any of the operations, it will be logged as:

```bash
CATCH: Something went wrong
```

## Notes

- The code uses `setTimeout` to simulate asynchronous network requests, but in a real-world scenario, you would replace these with actual API calls.
- The total cost calculation is simple: it multiplies the number of subscriptions by 100, but this can be modified to include dynamic pricing.
- This example shows how to use `async/await` for handling promises more cleanly compared to chaining `.then()`.
