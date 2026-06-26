document.addEventListener("DOMContentLoaded", function(){

    const imagenes = [ 
        "img/logo.png",
        "img/salud mental.webp",
        "img/Salud mental.jpg"
     ];
     let indiceActual = 0;

     const imagenPrincipal = document.getElementById("imagenPrincipal");
     const btnAnterior = document.getElementById("btnAnterior");
     const btnSiguiente = document.getElementById("btnSiguiente");

     function mostrarImagen(indice){
     imagenPrincipal.src = imagenes[indice];
    } 

    btnSiguiente.addEventListener("click", function(){
    indiceActual++;
    if(indiceActual>= imagenes.length) indiceActual = 0;
    mostrarImagen(indiceActual);
    });

    btnAnterior.addEventListener("click", function(){
      indiceActual--;
      if(indiceActual < 0) indiceActual = imagenes.length -1;
        mostrarImagen(indiceActual);
      });

      mostrarImagen(indiceActual);
 });

 window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Formulario enviado");
      })
    });
  });
