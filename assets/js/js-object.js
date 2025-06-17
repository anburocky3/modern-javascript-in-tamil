// JSON Locally!
const friendsData = fetch('/assets/data/friends.json')

friendsData
  .then((response) => response.json())
  .then((friendsData) => {
    // Show it to UI
    const resultDivEl = document.querySelector('#result')

    friendsData.map((friends) => {
      return (resultDivEl.innerText += friends.name)
    })
  })

// JSON from Internet
const quotesAPI = fetch('https://mimic-server-api.vercel.app/quotes/1')

quotesAPI
  .then((res) => res.json())
  .then((quote) => {
    const quoteEl = document.querySelector('#quote')
    const authorEl = document.querySelector('#author')

    quoteEl.textContent = quote.quote
    authorEl.innerText = quote.author
    console.log(quote)
  })
