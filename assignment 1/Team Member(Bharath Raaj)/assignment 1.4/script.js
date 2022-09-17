const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages=[]
    if (name.value === '' || name.value == null) {
        messages.push('name is required')
    }
    if (password.value.length <=6){
        messages.push('password must be longer than 6 charecters')
    }
    if (password.value.lenth >= 20){
        messages.push('password must be less than 20 charecters')
    }
    if (password.value === 'password'){
        messages.push('password cannot be password')
    }
    if (messages.lenth > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})