document.getElementById("regresar").addEventListener("click", function (event) {
    event.preventDefault(); 
    window.location.href = "index.html"; 
});
document.getElementById("reiniciar").addEventListener("click", function(event) {
    event.preventDefault(); 
    location.reload(); 
});