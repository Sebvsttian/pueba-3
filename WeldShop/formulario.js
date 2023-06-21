var tablaCotizacion = localStorage.getItem("tablaCotizaciones");
tablaCotizacion = JSON.parse(tablaCotizacion);
if(tablaCotizacion == null){
    var tablaCotizacion = [];
}

var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if(idForm == null){
    var idForm = 0;
}

cargarPagina();

function cargarPagina(){
    if(idForm > 0){
        // 
    }
}



//funcion regfistrar datos 
function registrar(){
    console.log(objCotizacion);
    var objCotizacion = JSON.stringify({
        nombre: document.getElementById("formNombre").value,
        apellido: document.getElementById("formApellido").value,
        telefono: document.getElementById("formTelefono").value,
        telefonico: document.getElementById("formTelefonico").value,
        correo: document.getElementById("formCorreo").value,
        comuna: document.getElementById("formComuna").value,
        direccion: document.getElementById("formDireccion").value,
        descripcion: document.getElementById("formDescripcion").value
    });
    console.log(objCotizacion);

    tablaCotizacion.push(objCotizacion)

    localStorage.setItem("tablaCotizaciones", JSON.stringify(tablaCotizacion));


}
//valida los datos para el camio de color
function validardatos (elemento){
    let inombreequipo = document.getElementById("inombreequipo");
    var Nombre= inombreequipo.value;
    let formApellido = document.getElementById("formApellido");
    var Apellido= formApellido.value;
    let formTelefono = document.getElementById("formTelefono");
    var Telefono= formTelefono.value;
    let formTelefonico = document.getElementById("formTelefonico");
    var Telefonico= formTelefonico.value;
    let formCorreo = document.getElementById("formCorreo");
    var Correo= formCorreo.value;
    let formComuna = document.getElementById("formComuna");
    var Comuna= formComuna.value;
    let formDireccion = document.getElementById("formDireccion");
    var Direccion= formDireccion.value;
    let formDescripcion = document.getElementById("formDescripcion");
    var Descripcion= formDescripcion.value;
  //llama a  la funcion "cambiarcolorvacio" para realizarla
    cambiarcolorvacio(Nombre);
    cambiarcolorvacio(Apellido);
    cambiarcolorvacio(Telefono);
    cambiarcolorvacio(Telefonico);
    cambiarcolorvacio(Correo);
    cambiarcolorvacio(Comuna);
    cambiarcolorvacio(Direccion);
    cambiarcolorvacio(Descripcion);
  }
  // toma los textos dentro de <p> para cambiarle el tamaño "valor" dentro de las opciones elegidas por el usuario
function CambioTexto(){
    var e=document.getElementsByTagName("p");
    var x=document.getElementById("valor");
    for (var i = 0; i < e.length; i++){
      if (x.options[x.selectedIndex].text=="elige"){
        return false
      }//las lineas de abajo define el color,fuente y tamaño de letra
      e[i].style.fontSize=x.options[x.selectedIndex].text+"px";
      e[i].style.fontFamily="Arial";
      e[i].style.color="#000000";
    }
  }
  //cambiarcolorvacio realiza el cambio de color a los camos sin datos dentro del input
function cambiarcolorvacio (elemento){
    if(elemento.value==""){
        elemento.style.backgroundColor ="red";
    }else{
        elemento.style.backgroundColor ="green";
    }}