function displayToast(message) {
  const buttonEl = document.querySelector('#sayHello')

  buttonEl.addEventListener('click', () => {
    const divEl = document.createElement('div')
    divEl.className = 'bg-blue-100 text-blue-500 p-10 rounded mt-3'
    divEl.textContent = message

    const resultDiv = document.querySelector('#result')
    resultDiv.append(divEl)
  })
}

export default displayToast
