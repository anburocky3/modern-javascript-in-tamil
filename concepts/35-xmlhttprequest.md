# XMLHttpRequest (XHR) Overview

This document provides a detailed explanation of the **XMLHttpRequest (XHR)** object, which is a legacy way to make HTTP requests in JavaScript. Although modern applications often use the **Fetch API**, understanding XHR is still valuable for maintaining older codebases or working in environments where Fetch is not supported.

---

## What is XMLHttpRequest?

The **XMLHttpRequest** object is a built-in browser API that allows you to make HTTP requests to a server and handle the response asynchronously. It was the primary way to implement AJAX (Asynchronous JavaScript and XML) before the introduction of the Fetch API.

---

## Basic Syntax

Here’s the basic structure of an XMLHttpRequest:

```javascript
// 1. Create an XHR object
const xhr = new XMLHttpRequest()

// 2. Define the request type, URL, and whether it's asynchronous
xhr.open('GET', 'https://mimic-server-api.vercel.app/quotes', true)

// 3. Set up event listeners for the request
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Request was successful
    console.log(JSON.parse(xhr.responseText))
  } else {
    // Request failed
    console.error('Request failed with status:', xhr.status)
  }
}

xhr.onerror = function () {
  // Handle network errors
  console.error('Network error occurred')
}

// 4. Send the request
xhr.send()
```

---

## Key Methods and Properties

### Methods

1. **`xhr.open(method, url, async)`**:

   - Initializes the request.
   - `method`: The HTTP method (e.g., `GET`, `POST`, `PUT`, `DELETE`).
   - `url`: The URL to send the request to.
   - `async`: Whether the request should be asynchronous (`true` by default).

2. **`xhr.send(body)`**:

   - Sends the request to the server.
   - `body`: Optional data to send with the request (e.g., for `POST` or `PUT` requests).

3. **`xhr.abort()`**:

   - Aborts the request if it has already been sent.

4. **`xhr.setRequestHeader(header, value)`**:

   - Sets a request header (e.g., `Content-Type`).

5. **`xhr.getAllResponseHeaders()`**:

   - Returns all response headers as a string.

6. **`xhr.getResponseHeader(header)`**:
   - Returns the value of a specific response header.

---

### Properties

1. **`xhr.readyState`**:

   - Represents the state of the request:
     - `0`: UNSENT (request not initialized).
     - `1`: OPENED (request initialized).
     - `2`: HEADERS_RECEIVED (request sent and headers received).
     - `3`: LOADING (response is being received).
     - `4`: DONE (request complete).

2. **`xhr.status`**:

   - The HTTP status code of the response (e.g., `200`, `404`, `500`).

3. **`xhr.statusText`**:

   - The status text corresponding to the status code (e.g., `OK`, `Not Found`).

4. **`xhr.responseText`**:

   - The response data as a string.

5. **`xhr.response`**:

   - The response data, which can be a string, JSON, or binary data depending on the `responseType`.

6. **`xhr.responseType`**:

   - Specifies the type of response data (e.g., `text`, `json`, `blob`, `arraybuffer`).

7. **`xhr.timeout`**:
   - Sets a timeout (in milliseconds) for the request.

---

## Example: Making a GET Request

```javascript
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://mimic-server-api.vercel.app/quotes/1', true)

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Response:', JSON.parse(xhr.responseText))
  } else {
    console.error('Request failed with status:', xhr.status)
  }
}

xhr.onerror = function () {
  console.error('Network error occurred')
}

xhr.send()
```

---

## Example: Making a POST Request

```javascript
const xhr = new XMLHttpRequest()
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true)
xhr.setRequestHeader('Content-Type', 'application/json')

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Response:', JSON.parse(xhr.responseText))
  } else {
    console.error('Request failed with status:', xhr.status)
  }
}

xhr.onerror = function () {
  console.error('Network error occurred')
}

const data = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
})

xhr.send(data)
```

---

## Handling Events

XMLHttpRequest provides several event listeners to handle different stages of the request lifecycle:

1. **`onreadystatechange`**:

   - Fires whenever the `readyState` changes.
   - Example:
     ```javascript
     xhr.onreadystatechange = function () {
       if (xhr.readyState === 4 && xhr.status === 200) {
         console.log('Response:', xhr.responseText)
       }
     }
     ```

2. **`onload`**:

   - Fires when the request completes successfully.

3. **`onerror`**:

   - Fires when a network error occurs.

4. **`onprogress`**:

   - Fires periodically while the response is being received.
   - Useful for tracking download progress.

5. **`ontimeout`**:
   - Fires if the request times out.

---

## Advantages of XMLHttpRequest

1. **Browser Support**:

   - XHR is supported in all browsers, including older ones.

2. **Fine-Grained Control**:

   - Provides detailed control over request headers, timeouts, and progress tracking.

3. **Legacy Code Compatibility**:
   - Essential for maintaining older applications that rely on XHR.

---

## Disadvantages of XMLHttpRequest

1. **Verbose Syntax**:

   - Requires more code compared to the Fetch API.

2. **Callback Hell**:

   - Relies heavily on callbacks, which can lead to nested and hard-to-read code.

3. **No Promises**:

   - Does not natively support promises, making asynchronous code harder to manage.

4. **Limited Features**:
   - Lacks modern features like streaming and request cancellation (without workarounds).

---

## Comparison with Fetch API

| Feature                  | XMLHttpRequest                            | Fetch API                            |
| ------------------------ | ----------------------------------------- | ------------------------------------ |
| **Syntax**               | Verbose, callback-based                   | Clean, promise-based                 |
| **Error Handling**       | Manual (check `status` and `xhr.onerror`) | Built-in (`.catch()` for errors)     |
| **Request Cancellation** | Requires workarounds                      | Native support via `AbortController` |
| **Streaming**            | Limited                                   | Full support for streaming           |
| **Browser Support**      | All browsers                              | Modern browsers (not in IE)          |

---

## When to Use XMLHttpRequest?

- **Legacy Code**: When working with older codebases that use XHR.
- **Browser Compatibility**: When targeting older browsers that do not support Fetch.
- **Fine-Grained Control**: When you need detailed control over request headers, timeouts, or progress tracking.

---

## Conclusion

While the **Fetch API** is the modern standard for making HTTP requests in JavaScript, **XMLHttpRequest** remains a powerful and widely supported tool. Understanding both APIs is essential for working across different environments and maintaining legacy systems.

For new projects, prefer the Fetch API for its simplicity and modern features. However, XHR is still valuable in specific scenarios where compatibility or fine-grained control is required.
