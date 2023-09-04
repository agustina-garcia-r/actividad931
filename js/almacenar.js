const inputtt = document.getElementById('item');

const botoncito = document.getElementById('agregar');
const divcito = document.getElementById('contenedor');


botoncito.addEventListener("click",function(){
    const inputItem = inputtt.value;

    if (inputItem.trim() !== '') { // Verificar que el valor no esté vacío
        const newItem = document.createElement('li'); // Crear un nuevo elemento li
        newItem.textContent = inputItem; // Establecer el contenido del nuevo elemento
        divcito.appendChild(newItem); // Agregar el nuevo elemento a la lista
        
        inputtt.value = ''; // Limpiar el campo de entrada
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



