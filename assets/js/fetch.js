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

// Create quotes
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

// createQuotes()

// Update quotes
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

// Delete a resource
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
// deleteQuote(40)

// patch records
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
// updateQuoteAuthor(39)

// Request Cancellation
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
// readQuote()
