const checkComplete = () => { // Aqui creamos los elementos html para el boton checkcComplete
    const i = document.createElement("i");
    i.classList.add('far','fa-check-square', 'icon' );
    i.addEventListener('click', completeTask);
    return i;
}


const completeTask = (event) => {   //Aqui creamos la funcionalidad del CheckCpmplete (cambio de color)
    const elemet = event.target;
    elemet.classList.toggle("fas");   //.toggle sirve para poner o quitar class si existen o no...
    elemet.classList.toggle("completeIcon");
    elemet.classList.toggle("far");
};


export default checkComplete;