# Quotes API Interaction

This repository contains JavaScript code that interacts with a quotes API hosted at `https://mimic-server-api.vercel.app/quotes`. The code demonstrates various CRUD (Create, Read, Update, Delete) operations, as well as advanced features like request cancellation and handling offline resources.

## Code Overview

### 1. Fetching a Quote by ID

```javascript
async function fetchQuotes(id) {
  try {
    const quotesAPI = await fetch(
      'https://mimic-server-api.vercel.app/quotes/' + id
    )
    if (!quotesAPI.ok) {
      throw new Error('URL is wrong!')
    }

    const data = await quotesAPI.json()

    const quoteEl = document.querySelector('#quote')
    const authorEl = document.querySelector('#author')

    quoteEl.innerText = data.quote
    authorEl.textContent = data.author
  } catch (error) {
    console.error(error)
  }
}
fetchQuotes(3)
```

- **Purpose**: Fetches a specific quote by its ID from the API and displays it on the webpage.
- **Parameters**: `id` (number) - The ID of the quote to fetch.
- **Usage**: The function is called with `fetchQuotes(3)`, which fetches the quote with ID 3.
- **Error Handling**: If the URL is incorrect or the request fails, an error is logged to the console.

### 2. Creating a New Quote

```javascript
async function createQuotes() {
  const response = await fetch('https://mimic-server-api.vercel.app/quotes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quote: 'Never ever give up!',
      author: 'Jenika',
    }),
  })

  const data = await response.json()

  console.log(data)
  alert('Data has been created')
}

// createQuotes();
```

- **Purpose**: Creates a new quote by sending a POST request to the API.
- **Usage**: The function is commented out but can be called with `createQuotes()` to create a new quote.
- **Response**: The created quote data is logged to the console, and an alert is shown to indicate success.

### 3. Updating an Existing Quote

```javascript
async function updateQuote() {
  const response = await fetch(
    'https://mimic-server-api.vercel.app/quotes/40',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quote: 'Never cheat & betray anyone who loves you!',
        author: 'Trisha Krishnan',
      }),
    }
  )

  const data = await response.json()
  console.log(data)
  alert('Data has been updated!')
}
// updateQuote();
```

- **Purpose**: Updates an existing quote by sending a PUT request to the API.
- **Usage**: The function is commented out but can be called with `updateQuote()` to update the quote with ID 40.
- **Response**: The updated quote data is logged to the console, and an alert is shown to indicate success.

### 4. Deleting a Quote

```javascript
async function deleteQuote(id) {
  const response = await fetch(
    'https://mimic-server-api.vercel.app/quotes/' + id,
    {
      method: 'DELETE',
    }
  )

  const data = await response.json()
  console.log(data)
  alert('Data has been deleted!')
}
// deleteQuote(40);
```

- **Purpose**: Deletes a quote by sending a DELETE request to the API.
- **Parameters**: `id` (number) - The ID of the quote to delete.
- **Usage**: The function is commented out but can be called with `deleteQuote(40)` to delete the quote with ID 40.
- **Response**: The deleted quote data is logged to the console, and an alert is shown to indicate success.

### 5. Partially Updating a Quote (PATCH)

```javascript
async function updateQuoteAuthor(id) {
  const response = await fetch(
    'https://mimic-server-api.vercel.app/quotes/' + id,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: 'Anbuselvan rocky',
      }),
    }
  )
  const data = await response.json()
  console.log(data)
  alert('Author data has been updated')
}
// updateQuoteAuthor(39);
```

- **Purpose**: Partially updates a quote by sending a PATCH request to the API. In this case, only the author field is updated.
- **Parameters**: `id` (number) - The ID of the quote to update.
- **Usage**: The function is commented out but can be called with `updateQuoteAuthor(39)` to update the author of the quote with ID 39.
- **Response**: The updated quote data is logged to the console, and an alert is shown to indicate success.

### 6. Request Cancellation

```javascript
async function readQuote() {
  const controller = new AbortController()
  const signal = controller.signal

  setTimeout(async () => {
    try {
      const response = await fetch(
        'https://mimic-server-api.vercel.app/quotes/2',
        {
          signal,
        }
      )
      const data = await response.json()
      console.log(data)
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error('Fetch request has been aborted by another person')
      } else {
        console.error('fetche error')
      }
    }
  }, 5000)

  //   abort the fetch request
  setTimeout(() => {
    controller.abort()
    console.log('Fetch aborted after 3 secs')
  }, 3000)
}
// readQuote();
```

- **Purpose**: Demonstrates how to cancel a fetch request using the `AbortController`.
- **Usage**: The function is commented out but can be called with `readQuote()` to initiate a fetch request that will be aborted after 3 seconds.
- **Behavior**: The fetch request is scheduled to start after 5 seconds, but it is aborted after 3 seconds, resulting in an `AbortError`.

### 7. Fetching Offline Resource

```javascript
// 1. Fetch request in Offline resource
// let response2 = await fetch('/assets/js/data/quotes.json')
// let text = await response2.text() // read response body as text
// console.log(text)
```

- **Purpose**: Demonstrates how to fetch a local JSON file (offline resource).
- **Usage**: The code is commented out but can be used to fetch a local JSON file and log its content as text.
- **Note**: This is useful for scenarios where you need to work with local data or fallback resources when the API is unavailable.

## How to Use

1. **Clone the Repository**: Clone this repository to your local machine.
2. **Run the Code**: Open the JavaScript file in your preferred environment (e.g., browser console, Node.js).
3. **Uncomment Functions**: Uncomment the function calls (e.g., `createQuotes()`, `updateQuote()`, etc.) to test different operations.
4. **Observe Results**: Check the console logs and alerts to see the results of each operation.

## Dependencies

- **Fetch API**: The code uses the Fetch API to make HTTP requests.
- **Browser Environment**: Some functions (e.g., `fetchQuotes`) assume a browser environment with DOM elements (`#quote`, `#author`).

## Error Handling

- The code includes basic error handling using `try-catch` blocks to log errors to the console.
- Specific error handling for request cancellation is also implemented.
