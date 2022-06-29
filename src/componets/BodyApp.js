import React, { useContext } from "react";
import { FiDelete, FiEdit } from 'react-icons/fi';

import '../App.css';

import ToDoContext from '../context/Context';
import setDisabled from "../helpers/editable";

const BodyApp = () => {

  const {
    //  newTask,
    todo,
    setTodo,
    // setNewTask
  } = useContext(ToDoContext)

  return (
    <main className="taskContainer">
      <div className="tasks">
        {
          !todo.length ?
            <h4 className="notTask">
              Experimente adicionar alguma tarefa!
            </h4>
            :
            todo.map(({ id, task, disabled }) => (
              <div key={id} className="todo">
                {disabled ?
                  <p
                    // onClick={() => console.log('um clique')}
                    // onDoubleClick={() => console.log('2 clique')}
                    >
                    {task}
                  </p>
                  : <input
                    type="text"
                    placeholder={task}
                    className={`task toDo ${disabled ? '' : 'editable'}`}

                    id={id}
                    disabled={disabled}
                  />
                }


                <div className="setings">
                  <button
                    className="editTask"
                    id="test"
                    onClick={() => {
                      setDisabled(id, todo, setTodo)
                    }}><FiEdit className='icon' /></button>
                  <button className="deletTask"><FiDelete className='icon' /></button>
                </div>
              </div>
            ))
        }
      </div>
    </main>
  )
}

export default BodyApp;