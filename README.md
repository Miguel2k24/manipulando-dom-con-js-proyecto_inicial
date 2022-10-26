Manipulacion del DOM...

Donde podemos ver que utilizamos las siguientes funcionalidades...


evento.preventDefault() quien fue declarado en una funcion para que la pagina no se recargue cuando hagamos una accion..

document.querySelector("[data-form-input]");   el query con la llamada de (data-)..

document.createElement('li')   Aqui creamos etiquetas HTML..

task.classList.add('card') Con esto agregamos clases a nuestras etiquetas declaradas en JS..



const taskContent = document.createElement('div'); 
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value; 
        taskContent.appendChild(titleTask);  etiquetas hijos..


con todo esto agregamos etiquetas y creamos



btn.addEventListener("click", createTask);   Agregar eventos...