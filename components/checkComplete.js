const checkComplete = (id) => { // Aqui creamos los elementos html para el boton checkcComplete
    const i = document.createElement("i");
    i.classList.add('far','fa-check-square', 'icon' );
    i.addEventListener('click', (event) => completeTask(event,id));
    return i;
}


const completeTask = (event, id) => {   //Aqui creamos la funcionalidad del CheckCpmplete (cambio de color)
    const elemet = event.target;
    elemet.classList.toggle("fas");   //.toggle sirve para poner o quitar class si existen o no...
    elemet.classList.toggle("completeIcon");
    elemet.classList.toggle("far");
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex(item => item.id === id);
    tasks[index]["complete"] = !tasks[index]["complete"];
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


export default checkComplete;