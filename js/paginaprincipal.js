var w;
var h;
function datospantalla(){
    w = window.innerWidth
    /*document.getElementById('demo').innerHTML = w;*/
    if(w>600){
        document.getElementById("linkuniversidad").href = "#marcaprincipal";
        document.getElementById("linkproyecto").href = "#marcaprincipal";
        document.getElementById("linkcontacto").href = "#marcaprincipal";

        document.getElementById("linkasideuniversidad").href = "#marcaprincipal";
        document.getElementById("linkasideproyecto").href = "#marcaprincipal";
        document.getElementById("linkasidecontacto").href = "#marcaprincipal";
    }else{
        document.getElementById("linkuniversidad").href = "#marcafinal";
        document.getElementById("linkproyecto").href = "#marcafinal";
        document.getElementById("linkcontacto").href = "#marcafinal";

        document.getElementById("linkasideuniversidad").href = "#marcafinal";
        document.getElementById("linkasideproyecto").href = "#marcafinal";
        document.getElementById("linkasidecontacto").href = "#marcafinal";
    }
}
window.addEventListener("resize", function(){
    /*document.getElementById('demo').innerHTML = window.innerWidth;*/
    w = window.innerWidth;
    if(w>600){
        document.getElementById("linkuniversidad").href = "#marcaprincipal";
        document.getElementById("linkproyecto").href = "#marcaprincipal";
        document.getElementById("linkcontacto").href = "#marcaprincipal"; 

        document.getElementById("linkasideuniversidad").href = "#marcaprincipal";
        document.getElementById("linkasideproyecto").href = "#marcaprincipal";
        document.getElementById("linkasidecontacto").href = "#marcaprincipal";
    }else{
        document.getElementById("linkuniversidad").href = "#marcafinal";
        document.getElementById("linkproyecto").href = "#marcafinal";
        document.getElementById("linkcontacto").href = "#marcafinal";

        document.getElementById("linkasideuniversidad").href = "#marcafinal";
        document.getElementById("linkasideproyecto").href = "#marcafinal";
        document.getElementById("linkasidecontacto").href = "#marcafinal";
    }
  });

function mostrarPrincipal(){ 
    document.getElementById('principal').style.display = 'block'
    document.getElementById('universidad').style.display = 'none'
    document.getElementById('proyectos').style.display = 'none'
    document.getElementById('documentos').style.display = 'none'
    
}
function mostrarUniversidad(){
    document.getElementById('principal').style.display = 'none'
    document.getElementById('universidad').style.display = 'block'
    document.getElementById('proyectos').style.display = 'none'
    document.getElementById('documentos').style.display = 'none'
    
}
function mostrarProyectos(){
    document.getElementById('principal').style.display = 'none'
    document.getElementById('universidad').style.display = 'none'
    document.getElementById('proyectos').style.display = 'block'
    document.getElementById('documentos').style.display = 'none'
   
}
function mostrarDocumentos(){
    document.getElementById('principal').style.display = 'none'
    document.getElementById('universidad').style.display = 'none'
    document.getElementById('proyectos').style.display = 'none'
    document.getElementById('documentos').style.display = 'block'
    
}
