const password = document.querySelector('#PASSWORD')
const repassword = document.querySelector('#REPASSWORD')

repassword.addEventListener('blur', (e) => {
  password.value === repassword.value ? repassword.style.border = '1px solid green' : repassword.style.border = '1px solid red'

})