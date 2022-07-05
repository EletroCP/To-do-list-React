import React, { useState } from "react";

import ToDoContext from "./Context";

const Provider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [hideSetings, setHideSetings] = useState('none');
  const contextValue = {
    hideSetings,
    todo,
    newTask,
    setHideSetings,
    setTodo,
    setNewTask,
  }

  return (
    <ToDoContext.Provider value={ contextValue }>
      { children }
    </ToDoContext.Provider>
  )

}

export default Provider;