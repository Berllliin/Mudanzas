function mostrar(){
    document.getElementById('sliding_menu').classList.add('open')
}

function ocultar(){
    document.getElementById('sliding_menu').classList.remove('open')
}

const evento = document.getElementsById('send')
const enviarFormulario =() => {
    let nombre = document.getElementById('nombre').value;
    let celular = document.getElementById('celular').value;
    let mensaje = document.getElementById('mensaje').value;
    let numero = 573016677664
var win= window.open ("https://api.whatsapp.com/send?phone=573163745958&text=%C2%A1Hola%21+Deseo+informaci%C3%B3n+de+sus+servicios%2C+me+comunico+desde+la+ciudad+de&type=phone_number&app_absent=0")
}
evento.addEventListener('click', enviarFormulario)

"https://api.whatsapp.com/send?phone=573163745958&text=%C2%A1Hola%21+Deseo+informaci%C3%B3n+de+sus+servicios%2C+me+comunico+desde+la+ciudad+de&type=phone_number&app_absent=0"

`https://api.whatsapp.com/send?phone=${numero}&text=Hola%20mi%20nombre%20es%20${nombre}%20,Asunto%20${mensaje}%20me%20puede%20contactar%20al%20${celular}`)