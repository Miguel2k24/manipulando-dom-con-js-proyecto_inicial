//Aqui importamos nuestros modulos que hacen funciones de dos botones el checkin y el delete..
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";



( ()=> {  // entramos el codigo en una arroufunction y ya el usuario no tiene acceso a nuetro codigo
    const btn = document.querySelector("[data-form-btn]");

    const createTask = (evento) => {
        evento.preventDefault()  // esto sirve para que no se actualize la pagina
        const input = document.querySelector("[data-form-input]");
        // aqui capturamos lo que ponemos en el input.. con el query y el (.value)
       
        const value = input.value;
        const list = document.querySelector("[date-list]")
        const task = document.createElement('li'); //Este es el selector de la CARD
        task.classList.add('card'); //Aqui agregamo a la lista con el estilo
        
        if (value === ''){
            return alert("Nombre de la tarea No puede estar vacio!!");
        };

        input.value = "";


        const taskContent = document.createElement('div'); 
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value; 
        taskContent.appendChild(titleTask);


        

      //task.innerHTML = content;  // Aqui con el innerHTML lo pasamos al codigo del HTML
        list.appendChild(task);
        task.appendChild(taskContent)
        task.appendChild(deleteIcon())
    }

    
    btn.addEventListener("click", createTask);
    
})();