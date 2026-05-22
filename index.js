document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.querySelector('main');
    const tareaCardCrear = document.querySelector('.tarea-card-crear');
    const btnNuevaTarea = document.querySelector('.btn-nueva-tarea');
    const btnCancelar = document.querySelector('.tarea-btn-cancelar');
    const desplegablePrioridades = tareaCardCrear.querySelector('.tarea-prioridades');

    btnNuevaTarea.addEventListener('click', function() {
        tareaCardCrear.style.display = 'flex';
        btnNuevaTarea.style.display = 'none';
    })

    btnCancelar.addEventListener('click', function() {
        tareaCardCrear.style.display = 'none';
        btnNuevaTarea.style.display = 'flex';

        tareaCardCrear.querySelector('.tarea-input-fecha').value = '';
        tareaCardCrear.querySelector('.tarea-prioridades').selectedIndex = 0;
        tareaCardCrear.querySelector('.tarea-input-texto').value = '';
    })

    desplegablePrioridades.addEventListener('change', function() {
        const opcionSeleccionada = desplegablePrioridades.options[desplegablePrioridades.selectedIndex];
        const prioridadSeleccionada = opcionSeleccionada.value;
        switch (prioridadSeleccionada) {
            case 'prioridad1':
                desplegablePrioridades.style.backgroundColor = 'greenyellow';
                break;
            case 'prioridad2':
                desplegablePrioridades.style.backgroundColor = 'red';
                break;
            case 'prioridad3':
                desplegablePrioridades.style.backgroundColor = 'blue';
        }   
    })

    tareaCardCrear.style.display = 'none';

});