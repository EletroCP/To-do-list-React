import React, { useContext } from "react";

import '../App.css';

import ToDoContext from '../context/Context';
import TaskApp from "./TaskApp";

const BodyApp = () => {

  const {
    todo,
  } = useContext(ToDoContext);

  return (
    <main className="taskContainer">
      <div className="tasks">
        {
          !todo.length ?
            <h4 className="notTask">
              Experimente adicionar alguma tarefa!
            </h4>
            :
            <TaskApp/>
        }
      </div>
    </main>
  )
}

export default BodyApp;