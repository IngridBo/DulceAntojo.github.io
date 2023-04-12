
const boxForm = document.querySelector('#box-form')
boxForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const user= document.querySelector('#user').value
    const email= document.querySelector('#email').value                                           
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.user}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '../index.html'   

})