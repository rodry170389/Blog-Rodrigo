var w;
function mostrarPrincipal(){
    document.getElementById('Columnaizda').style.display = 'block' 
    document.getElementById('principal').style.display = 'block'
    document.getElementById('universidad').style.display = 'none'
    document.getElementById('proyectos').style.display = 'none'
    document.getElementById('documentos').style.display = 'none'
    
}
function mostrarUniversidad(){
    w = window.innerWidth
    if(w>600){
        document.getElementById('Columnaizda').style.display = 'block' 
        document.getElementById('principal').style.display = 'none'
        document.getElementById('universidad').style.display = 'block'
        document.getElementById('proyectos').style.display = 'none'
        document.getElementById('documentos').style.display = 'none'
    }else{
        document.getElementById('Columnaizda').style.display = 'none' 
        document.getElementById('principal').style.display = 'none'
        document.getElementById('universidad').style.display = 'block'
        document.getElementById('proyectos').style.display = 'none'
        document.getElementById('documentos').style.display = 'none'
    }  
}
function mostrarProyectos(){
    w = window.innerWidth
    if(w>600){
        document.getElementById('Columnaizda').style.display = 'block' 
        document.getElementById('principal').style.display = 'none'
        document.getElementById('universidad').style.display = 'none'
        document.getElementById('proyectos').style.display = 'block'
        document.getElementById('documentos').style.display = 'none'
    }else{
        document.getElementById('Columnaizda').style.display = 'none' 
        document.getElementById('principal').style.display = 'none'
        document.getElementById('universidad').style.display = 'none'
        document.getElementById('proyectos').style.display = 'block'
        document.getElementById('documentos').style.display = 'none'
    } 
}
function mostrarDocumentos(){
    w = window.innerWidth
    if(w>600){
        document.getElementById('Columnaizda').style.display = 'block' 
        document.getElementById('principal').style.display = 'none'
        document.getElementById('universidad').style.display = 'none'
        document.getElementById('proyectos').style.display = 'none'
        document.getElementById('documentos').style.display = 'block'
    }else{
        document.getElementById('Columnaizda').style.display = 'none' 
        document.getElementById('principal').style.display = 'none'
        document.getElementById('universidad').style.display = 'none'
        document.getElementById('proyectos').style.display = 'none'
        document.getElementById('documentos').style.display = 'block'  
    }  
}