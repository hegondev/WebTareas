const listaPrioridades = [
    { valor: 1, texto: "Baja" },
    { valor: 2, texto: "Media" },
    { valor: 3, texto: "Alta" }
];

document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.querySelector('main');
    const tareaCardCrear = document.querySelector('.tarea-card-crear');
    const btnNuevaTarea = document.querySelector('.btn-nueva-tarea');
    const btnCancelar = document.querySelector('.tarea-btn-cancelar');
    const desplegablePrioridades = tareaCardCrear.querySelector('.tarea-prioridades');

    //localStorage.removeItem("tareasGuardadas");

    /* Gestión lista de tareas en memoria local al iniciar la webapp */
    let listaTareasMemoria = localStorage.getItem("tareasGuardadas");
    if(listaTareasMemoria) {
        // Visualización de las tareas de la lista
        const tareasGuardadas = JSON.parse(listaTareasMemoria);
        tareasGuardadas.forEach(tarea => {
            const tareaCard = document.createElement('div');
            tareaCard.classList.add('tarea-card');
            tareaCard.innerHTML = `
                <span class="tarea-prioridad">Prioridad: ${listaPrioridades[tarea.prioridad].texto}</span>
                <p class="tarea-texto">${tarea.texto}</p>
                <span class="tarea-fecha-crea">&#128198; ${tarea.fecha}</span>
            `;
            mainElement.prepend(tareaCard);
        });        
    } else {
        // Datos prueba
        const tareaEjemplo1 = {
            id: 1,
            prioridad: 1,
            texto: "Tarea de ejemplo 1",
            fecha: "11-11-2025",
        }

        //localStorage.setItem("tareasGuardadas", JSON.stringify([tareaEjemplo1]));
        
        const tareaEjemplo2 = {
        id: 2,
        prioridad: 2,
        texto: "Tarea de ejemplo 2",
        fecha: "11-12-2025",
        }

        localStorage.setItem("tareasGuardadas", JSON.stringify([tareaEjemplo1, tareaEjemplo2]));
    }
    /* Fin de gestión de lista de tareas en memoria local*/

    btnNuevaTarea.addEventListener('click', function() {
        // Mostrar card para crear tarea y ocultar botón añadir tarea
        tareaCardCrear.style.display = 'flex';
        btnNuevaTarea.style.display = 'none';
    })

    btnCancelar.addEventListener('click', function() {
        // Mostrar botón añadir tarea y ocultar card para crear tarea
        tareaCardCrear.style.display = 'none';
        btnNuevaTarea.style.display = 'flex';

        // Restaurar parámetros a valores iniciales
        tareaCardCrear.querySelector('.tarea-input-fecha').value = '';
        tareaCardCrear.querySelector('.tarea-input-texto').value = '';
        desplegablePrioridades.selectedIndex = 0;
        desplegablePrioridades.style.backgroundColor = 'transparent';
    })

    desplegablePrioridades.addEventListener('change', function() {
        // Cambiamos color según opción seleccionada
        const opcionSeleccionada = desplegablePrioridades.selectedIndex;
        switch (opcionSeleccionada) {
            case 1:
                desplegablePrioridades.style.backgroundColor = 'greenyellow';
                break;
            case 2:
                desplegablePrioridades.style.backgroundColor = 'red';
                break;
            case 3:
                desplegablePrioridades.style.backgroundColor = 'blue';
        }   
    })

    // Al iniciar:
    // No mostramos card de crear tarea
    tareaCardCrear.style.display = 'none';
    // Prioridad inicial a 0 en card de crear tarea
    desplegablePrioridades.selectedIndex = 0;

});