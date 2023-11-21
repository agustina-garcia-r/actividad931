const inputtt = document.getElementById('item');

const botoncito = document.getElementById('agregar');
const divcito = document.getElementById('contenedor');


botoncito.addEventListener("click",function(){
    const inputItem = inputtt.value;

    if (inputItem.trim() !== '') {
        const newItem = document.createElement('li'); 
        newItem.textContent = inputItem; 
        divcito.appendChild(newItem);
        
        inputtt.value = ''; 
      }

});

const limpiarboton = document.getElementById('limpiar');

limpiarboton.addEventListener("click", function() {
 
    divcito.innerHTML = '';
});


window.addEventListener('load', function() {
    const listaGuardada = localStorage.getItem('listaDeElementos');
    if (listaGuardada) {
        divcito.innerHTML = listaGuardada;
    }
});


window.addEventListener('beforeunload', function() {
    const lista = divcito.innerHTML;
    localStorage.setItem('listaDeElementos', lista);
});



