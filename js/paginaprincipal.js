function mostrarPrincipal(){
    document.getElementById('principal').style.display = 'block'
    document.getElementById('proyectos').style.display = 'none'
    document.getElementById('contacto').style.display = 'none'
}
function mostrarProyectos(){
    document.getElementById('principal').style.display = 'none'
    document.getElementById('proyectos').style.display = 'block'
    document.getElementById('contacto').style.display = 'none'
}
function mostrarContacto(){
    document.getElementById('principal').style.display = 'none'
    document.getElementById('proyectos').style.display = 'none'
    document.getElementById('contacto').style.display = 'block'
}