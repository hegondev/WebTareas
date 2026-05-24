document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.querySelector('main');
    const tareaCardCrear = document.querySelector('.tarea-card-crear');
    const btnNuevaTarea = document.querySelector('.btn-nueva-tarea');
    const btnCancelar = document.querySelector('.tarea-btn-cancelar');
    const desplegablePrioridades = tareaCardCrear.querySelector('.tarea-prioridades');
    
    /* Gestión lista de tareas en memoria local al iniciar la webapp */
    let listaTareasMemoria = localStorage.getItem("tareasGuardadas");
    if(listaTareasMemoria) {
        // Visualización de las tareas de la lista
        
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
    // Prioridad inicial a 0
    desplegablePrioridades.selectedIndex = 0;

});