const deleteIcon = () => {
        
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon" );
    i.addEventListener("click", deleteTask);
    return i;
}

const deleteTask = (event) => {
    const eliminar = event.target.parentElement;
    eliminar.remove();

    //EN esta function acedimos al evento, luego al target o etiqueta HTML 
    //y luego al Elemento que selecciono el evento. para luego porder eliminarlo con remove()..
}


export default deleteIcon;