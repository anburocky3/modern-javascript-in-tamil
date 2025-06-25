const colorInput = document.querySelector('#color')

const ifColorCodeExist = sessionStorage.getItem('color')

if (ifColorCodeExist) {
  document.documentElement.style.backgroundColor = ifColorCodeExist
  colorInput.value = ifColorCodeExist
}

colorInput.addEventListener('change', (event) => {
  const colorCode = event.target.value
  document.documentElement.style.backgroundColor = colorCode
  sessionStorage.setItem('color', colorCode)
})
