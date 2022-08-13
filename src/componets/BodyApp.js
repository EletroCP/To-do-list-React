import React, { useContext, useEffect } from "react";

import '../App.css';

import ToDoContext from '../context/Context';
import { checkLocalStorage } from "../helpers/setLocalStorage";
import TaskApp from "./TaskApp";

const BodyApp = () => {

  const {
    todo,
    setTodo,
  } = useContext(ToDoContext);


  useEffect(() => {
    const oldLocal = checkLocalStorage();
    setTodo(oldLocal);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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