import React, { useEffect, useState } from 'react';

//Falta guardar los estados al contexto (tareas y tareas hechas) y también al local storage
//Agregar un botón para eliminar la tarea
//También poder borrar las tareas hechas
const Todo = () => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);
    const [tareasHechas, setTareasHechas] = useState([]);
    const getTodoValues = (event) => {
        setTarea(event.target.value);
    }
    const addTodoToList = (event) => {
        event.preventDefault();
        let listOftodos = [...tareas];
        listOftodos.push(tarea);
        setTareas(listOftodos);
        setTarea("");
    }

    const taskDone = (value) => {
        /*let finished = [...tareasHechas];
        finished.push(tareas[value]);*/
        let finished = [...tareasHechas, tareas[value]]; //Los elementos dentro de los corchetes hacen que se agreguen elementos a una lista 
        setTareasHechas(finished);
        let borraTareas = [...tareas];
        borraTareas.splice(value, 1);
        setTareas(borraTareas);
    }
    
        //La misma función pero simplificada
    /* const taskDone = (value) => {
        setTareasHechas((prev) => [...prev, tareas[value]]);
        setTareas((prev) => [...prev].filter((_, i) => i !== index));
    }; */


    const taskDelete = (value) => {
        let beforeDelete = [...tareasHechas];
        beforeDelete.splice(value, 1);
        setTareasHechas(beforeDelete);
    }

    const taskRevert = (value) => {
        let tasksBefore = [...tareasHechas];
        let changedTask = tasksBefore.splice(value, 1);
        console.log('changed task', changedTask);
        setTareasHechas(tasksBefore);
        let listaPendientes = [...tareas, changedTask];
        let tareaAdd = [...listaPendientes];
        setTareas(tareaAdd);
    }


  return (
    <div>
        <div>
        {tareas.length > 0 && <h4>Tareas Por Hacer</h4>}
            {tareas.map((t, index) => (
                <div key={index}>
                    {t}
                    <button value="Task Done" onClick={() =>
                        taskDone(index)
                    }>Done</button>
                </div>
            ))}
        </div>
        <div>
        {tareasHechas.length > 0 && <h4>Tareas Terminadas</h4>}
            {tareasHechas.map((t, index) => (
                <div key={index}>
                    {t}
                    <button value="Task Delete" onClick={() =>
                        taskDelete(index)
                    }>Delete</button>
                    <button value="Task Revert" onClick={() =>
                        taskRevert(index)
                    }>Revert</button>
                </div>
            ))}
        </div>
        <form>
            <label>Add your task here:</label>
            <input type="text" value={tarea} onChange={getTodoValues}></input>
            <input type="submit" value="Add here" onClick={addTodoToList}></input>
        </form>
    </div>
  )
}

export default Todo