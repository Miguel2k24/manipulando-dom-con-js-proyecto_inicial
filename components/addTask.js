//Aqui importamos nuestros modulos que hacen funciones de dos botones el checkin y el delete..
import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { readTasks } from "./readTasks.js";

export const addTask = (evento)=>{
    evento.preventDefault()  // esto sirve para que no se actualize la pagina

    const list = document.querySelector("[date-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    input.value = "";
    calendar.value = "";

    const complete = false;

    if (value === '' || date === ''){
        return alert("Nombre de la tarea o fecha No puede estar vacio!!");
    };

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4() 
    };

    list.innerHTML = '';
    
    
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    
    readTasks();
};



export const createTask = ({value, dateFormat, complete, id}) => {
    

    const task = document.createElement('li'); //Este es el selector de la CARD
        task.classList.add('card'); //Aqui agregamo a la lista con el estilo

    const taskContent = document.createElement('div'); 
    const check = checkComplete(id);

    if(complete){
        check.classList.toggle("fas");   //.toggle sirve para poner o quitar class si existen o no...
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }

    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value; 
        taskContent.appendChild(titleTask);
        taskContent.appendChild(check);


    const dateElement = document.createElement('span');
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));

    return task;
}