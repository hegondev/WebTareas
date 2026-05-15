document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.querySelector('main');

    const newSection = document.createElement('section');
    newSection.innerHTML = `
        <h2>Bienvenido</h2>
        <p>Comienza a editar <code>index.html</code> y agrega tu contenido aquí.</p>
    `;

    mainElement.appendChild(newSection);
    
});