const listaPrioridades = [
    { valor: 1, texto: "Baja" },
    { valor: 2, texto: "Media" },
    { valor: 3, texto: "Alta" }
];

document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.querySelector('main');
    const tareaCardCrear = document.querySelector('.tarea-card-crear');
    const btnNuevaTarea = document.querySelector('.btn-nueva-tarea');
    const btnCancelarNuevaTarea = document.querySelector('.tarea-btn-cancelar');
    const btnGuardarNuevaTarea = document.querySelector('.tarea-btn-guardar');
    const desplegablePrioridades = tareaCardCrear.querySelector('.tarea-prioridades');
    const textoTareaCardCrear = tareaCardCrear.querySelector('.tarea-input-texto');

    let listaTareasMemoria = localStorage.getItem("tareasGuardadas");
    
    /* Gestión lista de tareas en memoria local al iniciar la webapp */
    if(listaTareasMemoria) {
        // Visualización de las tareas de la lista
        const listaTareasJson = JSON.parse(listaTareasMemoria)
        listaTareasJson.forEach(tarea => {
            const tareaCard = document.createElement('div');
            tareaCard.classList.add('tarea-card');
            tareaCard.innerHTML = `
                <span class="tarea-prioridad">Prioridad: ${listaPrioridades[tarea.prioridad].texto}</span>
                <p class="tarea-texto">${tarea.texto}</p>
                <span class="tarea-fecha-crea">${tarea.fecha}</span>
            `;
            mainElement.prepend(tareaCard);
        });        
    }
    /* Fin de gestión de lista de tareas en memoria local*/

    btnNuevaTarea.addEventListener('click', function() {
        // Mostrar card para crear tarea y ocultar botón añadir tarea
        tareaCardCrear.style.display = 'flex';
        btnNuevaTarea.style.display = 'none';
    })

    btnCancelarNuevaTarea.addEventListener('click', function() {
        // Mostrar botón añadir tarea y ocultar card para crear tarea
        tareaCardCrear.style.display = 'none';
        btnNuevaTarea.style.display = 'flex';

        // Restaurar parámetros a valores iniciales
        tareaCardCrear.querySelector('.tarea-input-texto').value = '';
        desplegablePrioridades.selectedIndex = 0;
        desplegablePrioridades.style.backgroundColor = 'transparent';
    })

    btnGuardarNuevaTarea.addEventListener('click', function() {
        // Comprobamos que los campos de input estén rellenos
        if(desplegablePrioridades.selectedIndex != 0 
            && tareaCardCrear.querySelector('.tarea-input-texto').value != '') {
                // Creamos objeto con los datos de la nueva tarea
                let nuevaTarea = {
                    id: listaTareasMemoria == null ? 1 : listaTareasMemoria.length + 1,
                    prioridad: desplegablePrioridades.selectedIndex,
                    texto: textoTareaCardCrear.value,
                    fecha: new Date().toLocaleDateString()
                }
                
                // Si ya hay lista de tareas, añadimos. Si no, creamos lista con nueva tarea
                if(listaTareasMemoria != null)
                    listaTareasMemoria.add(nuevaTarea);
                else
                    listaTareasMemoria = [nuevaTarea];

                localStorage.setItem("tareasGuardadas", JSON.stringify(listaTareasMemoria));

        }
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