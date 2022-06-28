import React, { useContext } from "react";
import { FiDelete, FiEdit } from 'react-icons/fi'

import '../App.css';

import ToDoContext from '../context/Context';

const BodyApp = () => {

  const {
    //  newTask,
    todo,
    //  setTodo,
    // setNewTask
  } = useContext(ToDoContext)

  return (
    <main className="taskContainer">
      <div  className="tasks">
        {
        !todo.length ? 
        <h4 className="notTask">
          Experimente adicionar alguma tarefa!
        </h4>
        :
        todo.map((task, index) => (
          <div key={ task.substring(0, 3) + index } className="todo">
            <p className="task">{ task }</p>
            <div className="setings">
              <button className="editTask"><FiEdit className='icon'/></button>
              <button className="deletTask"><FiDelete className='icon'/></button>
            </div>
          </div>
        ))
        }
      </div>
    </main>
  )
}

export default BodyApp;