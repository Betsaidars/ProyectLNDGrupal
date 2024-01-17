/*
--window.addEventListener("DOMContentLoaded", () => {...}:
    Este bloque de código se ejecuta cuando el DOM ha sido completamente cargado.


--const spotlight = document.querySelector('.spotlight');:
    Selecciona el elemento en el DOM con la clase CSS 'spotlight' y lo almacena en la variable spotlight.


--let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';:
    Inicializa la variable spotlightSize con un valor que representa un gradiente radial. Este valor inicial establece un foco transparente de 160px seguido por una sombra semitransparente de 0.85 con un radio de 200px.


        Event Listeners:


--window.addEventListener('mousemove', e => updateSpotlight(e));:
    Escucha el evento de movimiento del ratón y llama a la función updateSpotlight para actualizar la posición del foco.


--window.addEventListener('mousedown', e => {...});:
    Escucha el evento de clic del ratón y cambia el tamaño del foco y su opacidad.


--window.addEventListener('mouseup', e => {...});:
    Escucha el evento de liberación del botón del ratón y restaura el tamaño y la opacidad original del foco.


--function updateSpotlight(e) {...}:
Esta función toma un evento de ratón y actualiza la propiedad backgroundImage del foco (spotlight). Utiliza un gradiente radial cuyo centro se posiciona en las coordenadas del ratón, y el tamaño y la opacidad del foco son determinados por la variable spotlightSize. */
