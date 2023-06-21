
var idForm = localStorage
function listar() {
    console.log("INGRTESADOOOO")
}

function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("registrar.html")
}

function Modoscuro() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }