let index = 0;  // Inicializa la variable 'index' que mantiene la posición actual de la imagen activa en el carrusel, empezando desde 0.

const images = document.querySelectorAll('.carrusel-images img');  // Selecciona todas las imágenes dentro del contenedor con la clase '.carrusel-images' y las almacena en la variable 'images'.
const totalImages = images.length;  // Almacena el total de imágenes que hay en el carrusel en la variable 'totalImages'.

// Función para mostrar la imagen en la posición 'index' y ocultar las demás.
function mostrarImagen(index) {
    images.forEach((img, i) => {  // Itera sobre todas las imágenes seleccionadas
        img.style.display = i === index ? 'block' : 'none';  // Si el índice de la imagen es igual al 'index' actual, la imagen se muestra (display: block), si no, se oculta (display: none).
    });
}

// Función para cambiar la imagen actual en la dirección indicada.
function cambiarImagen(direction) {
    index = (index + direction + totalImages) % totalImages;  //... Modifica el índice de la imagen actual sumando la dirección, asegurándose de que el índice no se salga del rango (circular).
    mostrarImagen(index);  // Llama a la función 'mostrarImagen' para mostrar la nueva imagen según el índice actualizado.
}

// Inicializar el carrusel mostrando la primera imagen (con índice 0).
mostrarImagen(index);

// Cambiar de imagen automáticamente cada 3 segundos.
setInterval(() => {  // Establece un intervalo que se ejecutará cada 3000 milisegundos (3 segundos).
    cambiarImagen(1);  // Llama a la función 'cambiarImagen' para pasar a la siguiente imagen (dirección 1).
}, 3000);  // El intervalo se repite cada 3 segundos.
