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
        document.getElementById("linkabajoproyectos").href = "#marcaprincipal";
        document.getElementById("linkasidecontacto").href = "#marcaprincipal";
    }else{
        document.getElementById("linkuniversidad").href = "#marcafinal";
        document.getElementById("linkproyecto").href = "#marcafinal";
        document.getElementById("linkcontacto").href = "#marcafinal";

        document.getElementById("linkasideuniversidad").href = "#marcafinal";
        document.getElementById("linkabajoproyectos").href = "#marcafinal";
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
        document.getElementById("linkabajoproyectos").href = "#marcaprincipal";
        document.getElementById("linkasidecontacto").href = "#marcaprincipal";
    }else{
        document.getElementById("linkuniversidad").href = "#marcafinal";
        document.getElementById("linkproyecto").href = "#marcafinal";
        document.getElementById("linkcontacto").href = "#marcafinal";

        document.getElementById("linkasideuniversidad").href = "#marcafinal";
        document.getElementById("linkabajoproyectos").href = "#marcafinal";
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
/*JavaScropit para imagenes Proyecto y documentación*/

function muestraimagen(){
    document.getElementById('myModal').style.display = "block";
    document.getElementById("img01").src = document.getElementById('myImg').src;
    document.getElementById("img01").alt = document.getElementById('myImg').alt;
    document.getElementById("caption").innerHTML = document.getElementById('myImg').alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function cerrarimagen() { 
    document.getElementById('myModal').style.display = "none";
}

/*JavaScropit para imagenes Proyecto y documentación*/

function muestraimagen2(){
    document.getElementById('myModal2').style.display = "block";
    document.getElementById("img02").src = document.getElementById('myImg2').src;
    document.getElementById("img02").alt = document.getElementById('myImg2').alt;
    document.getElementById("caption2").innerHTML = document.getElementById('myImg2').alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
function cerrarimagen2() { 
    document.getElementById('myModal2').style.display = "none";
}

function muestraimagen3(){
    document.getElementById('myModal3').style.display = "block";
    document.getElementById("img03").src = document.getElementById('myImg3').src;
    document.getElementById("img03").alt = document.getElementById('myImg3').alt;
    document.getElementById("caption3").innerHTML = document.getElementById('myImg3').alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
function cerrarimagen3() { 
    document.getElementById('myModal3').style.display = "none";
}

function muestraimagen4(){
    document.getElementById('myModal4').style.display = "block";
    document.getElementById("img04").src = document.getElementById('myImg4').src;
    document.getElementById("img04").alt = document.getElementById('myImg4').alt;
    document.getElementById("caption4").innerHTML = document.getElementById('myImg4').alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
function cerrarimagen4() { 
    document.getElementById('myModal4').style.display = "none";
}