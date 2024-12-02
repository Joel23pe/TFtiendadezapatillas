document.addEventListener('DOMContentLoaded', () => {  // ....Espera a que todo el contenido HTML de la página se haya cargado antes de ejecutar el código dentro de la función.
    const hamburguesa = document.querySelector('#hamburguer');  // ...Selecciona el elemento con id 'hamburguer' (el icono del menú hamburguesa).
    const enlaces = document.querySelector('#nav-links');  // Selecciona el contenedor con id 'nav-links' que contiene los enlaces de navegación.

    hamburguesa.addEventListener('click', () => {  // Añade un evento de clic al icono del menú hamburguesa.
        enlaces.classList.toggle('show');  // Alterna la clase 'show' en el contenedor de enlaces. Si 'show' está presente, los enlaces se muestran, si no, se ocultan.
    });

    // Selecciona todos los enlaces dentro del contenedor de navegación
    const linkItems = enlaces.querySelectorAll('a');  // Obtiene todos los elementos de enlace (`<a>`) dentro del contenedor 'nav-links'.

    // Agrega un evento de clic a cada enlace
    linkItems.forEach(link => {  // Recorre cada uno de los enlaces dentro del menú de navegación.
        link.addEventListener('click', () => {  // Añade un evento de clic a cada enlace.
            enlaces.classList.remove('show');  // ...Al hacer clic en un enlace, elimina la clase 'show', lo que oculta el menú hamburguesa.
        });
    });
});
