import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../AppContext';

//Falta guardar los estados al contexto (tareas y tareas hechas) y también al local storage
//Agregar un botón para eliminar la tarea
//También poder borrar las tareas hechas
const Todo = () => {
    const [tarea, setTarea] = useState("");
    const {tareas, setTareas} = useContext(AppContext);
    const {tareasHechas, setTareasHechas} = useContext(AppContext);
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
        setTareasHechas(tasksBefore);
        let listaPendientes = [...tareas, changedTask];
        let tareaAdd = [...listaPendientes];
        setTareas(tareaAdd);
    }

    const saveToLocal = () => {
        const tasks = tareas;
        const doneTasks = tareasHechas;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('donetasks', JSON.stringify(doneTasks));
    }

    /*useEffect(() => {
        saveToLocal();
        }
    );*/

    useEffect(() => {
        let seeTasks = localStorage.getItem('tasks');
        let seeDoneTasks = localStorage.getItem('donetasks');
        /*console.log('Tareas', seeTasks, typeof seeTasks);
        console.log('Tareas Hechas', seeDoneTasks, typeof seeDoneTasks);*/
        if (seeTasks !== undefined) {
            setTareas(JSON.parse(seeTasks) || [""]);
        }else{
            console.log(tareas, typeof tareas)
        }
        if (seeDoneTasks !== undefined) {
            setTareas(JSON.parse(seeDoneTasks) || [""]);
        }else{
            console.log(tareasHechas, typeof tareasHechas)
        }
        /*let tasksArr = JSON.parse(seeTasks);
        let doneTasksArr = JSON.parse(seeDoneTasks);
        setTareas(tasksArr);
        setTareasHechas(doneTasksArr);//
        /*if (tareas.length == 0){
            setTareas(JSON.parse(seeTasks);
        }
        /*
        setTareasHechas(seeDoneTasks);*/
    }, []);

    useEffect(() => {
        saveToLocal();
      }, [tareas, tareasHechas]);

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