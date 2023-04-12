const registrar = document.querySelector('#registrarUser')
//se prerpara la escucha del boton al realizar el submit 
registrar.addEventListener('submit', (e) =>{
    e.preventDefault()
    // declaramos las constantes por cada input y se le pasa por medio del id el nombre del dato correspondiente
    const user = document.querySelector('#user').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    //se usa locaStorage para simular la base de datos 
    const Users = JSON.parse(localStorage.getItem('Users')) || []
    // por medio de esta constante validamos que el usuario tenga los mismos datos
 
    const isUserRegistered = Users.find(user => user.email === email )
    //si el usuario ya esta registrado se le devolvera una alerta
    if (isUserRegistered) {
        return alert('Este usuario ya se encuentra registrado!')
    }
    /*En caso de que no se encuentre registrado se procede a almacenar los datos del registro 
    dentro de un array por medio del pus*/

    Users.push({user: user, email: email, password: password})
    //se da la orden de almacenar en el localstorage por medio de setItem y se almacena en users
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro exitoso!')
    // redireccionando al login
    window.location.href ='login.html'
})



    