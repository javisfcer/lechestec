document.addEventListener('DOMContentLoaded', () => {
    // Manejar envío de formularios para evitar recarga de página (Simulación)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Acción simulada con éxito! (Sin backend)');
            form.reset();
        });
    });

    // Añadir interactividad a los marcadores del mapa
    const markers = document.querySelectorAll('.marker');
    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            const name = marker.getAttribute('data-name');
            alert(`Ubicación de tienda seleccionada: ${name}`);
        });
    });

    // Interactividad simple para las tarjetas de las tiendas
    const storeItems = document.querySelectorAll('.store-item');
    storeItems.forEach(item => {
        item.addEventListener('click', () => {
            const storeName = item.querySelector('strong').innerText;
            alert(`Has seleccionado la tienda: ${storeName}`);
        });
    });
});
