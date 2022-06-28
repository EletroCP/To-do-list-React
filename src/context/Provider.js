import React, { useState } from "react";

import ToDoContext from "./Context";

const Provider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const contextValue = {
    todo,
    newTask,
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