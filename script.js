const inputTarea = document.getElementById('nuevaTarea');
const selectorPrioridad = document.getElementById('prioridadTarea');
const botonAgregar = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');

function agregarTarea() {
    const tareaTexto = inputTarea.value.trim();
    const prioridad = selectorPrioridad.value; 

    if (tareaTexto === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tareaTexto;

    
    if (prioridad === 'alta') {
        nuevaTarea.classList.add('prioridad-alta');
    } else {
        nuevaTarea.classList.add('prioridad-baja');
    }

    
    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = 'Completar';
    botonCompletar.addEventListener('click', () => {
        nuevaTarea.classList.toggle('completed');
    });

    
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        listaTareas.removeChild(nuevaTarea);
    });

    
    nuevaTarea.appendChild(botonCompletar);
    nuevaTarea.appendChild(botonEliminar);

    
    listaTareas.appendChild(nuevaTarea);

    
    inputTarea.value = '';
    selectorPrioridad.value = 'baja';
}


botonAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});
