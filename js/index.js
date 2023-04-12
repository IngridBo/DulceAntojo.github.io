
/*se realiza comprobación para verificar que los datos de usuario esten ingresados de lo contrario
se cierra inmediatamente y devuelve el login*/
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'Login.html'
})