import { addTask } from './components/addTask.js';
import { readTasks } from "./components/readTasks.js";

( ()=> {  // entramos el codigo en una arroufunction y ya el usuario no tiene acceso a nuetro codigo
    const btn = document.querySelector("[data-form-btn]");

    btn.addEventListener("click", addTask);
    readTasks();
})();