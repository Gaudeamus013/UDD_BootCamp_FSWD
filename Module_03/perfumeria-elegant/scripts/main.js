document.addEventListener('DOMContentLoaded', () => {
    const loadSection = (section) => {
        fetch(section)
            .then(response => response.text())
            .then(data => {
                document.getElementById('main-content').innerHTML = data;
            })
            .catch(error => console.error('Error al cargar la sección:', error));
    };

    const enlaces = document.querySelectorAll('.load-section');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            loadSection(section);
        });
    });

    // Cargar la sección de inicio por defecto
    loadSection('./navbar/inicio.html');
});
