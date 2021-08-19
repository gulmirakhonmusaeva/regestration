  const formEl = document.getElementById('form')
const usernameEl = document.getElementById('username')
const emailEl = document.getElementById('email')
const parol1El = document.getElementById('parol1')
const parol2El = document.getElementById('parol2')

// showError va showSuccess larni ko'rsatish 2 - ish

function showError(input, massage) {
  const formControl = input.parentElement
  formControl.classList = 'form-control error'
  const span = formControl.querySelector('span')
  span.textContent = massage
}

function showSuccess(input) {
  const formControl = input.parentElement
  formControl.classList = 'form-control success'
}

// submit qilganda xaton ko'rish 1 - ish
formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  if (usernameEl.value === '') {
    showError(usernameEl, 'Ism kiritilmadi')
  } else {
    showSuccess(usernameEl)
  }

  if (emailEl.value === '') {
    showError(emailEl, 'Email kiritilmadi')
  } else {
    showSuccess(emailEl)
  }
  if (parol1El.value === '') {
    showError(parol1El, 'Parol kiritilmadi')
  } else {
    showSuccess(parol1El)
  }

  if (parol2El.value === '') {
    showError(parol2El, 'Parolni qayta kiritilmadi')
  } else {
    showSuccess(parol2El)
  }
})



/* 

forEach

charAt // stingdi kesishda yordam beradi => slice sherigi

trim()

*/