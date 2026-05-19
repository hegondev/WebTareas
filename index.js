document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.querySelector('main');
    const tareaCardCrear = document.querySelector('.tarea-card-crear');
    const btnNuevaTarea = document.querySelector('.btn-nueva-tarea');
    const btnCancelar = document.querySelector('.tarea-btn-cancelar');

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

    tareaCardCrear.style.display = 'none';

});