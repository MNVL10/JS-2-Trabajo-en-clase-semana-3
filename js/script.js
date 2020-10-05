let contadorTareas = 0;
let listaTareas =[];
let listaTareas2 = localStorage.getItem('tareas');
if (listaTareas2) {
    tareas = JSON.parse(listaTareas2);
}

function addTask(nombretareas, fechatareas, completoTareas){
  const miTarea ={

    id: contadorTareas,
    nombre: nombretareas,
    completo: completoTareas,
    fecha: fechatareas,

  };

  listaTareas.push(miTarea);

  contadorTareas++;

  appendTaskDOM(miTarea);

  localStorage.setItem('tareas', JSON.stringify(listaTareas));

  console.log(listaTareas);

}


const lista = document.getElementById('task-list');

function appendTaskDOM(tarea) {
 
  const item = document.createElement('li');
  item.className = 'task-list_item';
 
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox');
  checkbox.setAttribute('id', `tarea-${tarea.id}`);
 
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${tarea.id}`);
  label.innerHTML = `${tarea.nombre} - ${tarea.fecha}`;
 
  item.appendChild(checkbox);
  item.appendChild(label);
  lista.appendChild(item);
}

for (let i = 0; i < listaTareas.length; i++) {
  appendTaskDOM(listaTareas[i]);
  
}

const formulario = document.getElementById('new-task-form');

formulario.addEventListener('submit', (event) => {

  event.preventDefault();
  

  addTask(formulario.elements[0].value, formulario.elements[1].value, false);

  formulario.elements[0].value= '';
  formulario.elements[1].value= '';
});

