import React, { useState } from "react";

import ToDoContext from "./Context";

const Provider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const contextValue = {
    todo,
    setTodo,
  }

  return (
    <ToDoContext.Provider value={ contextValue }>
      { children }
    </ToDoContext.Provider>
  )

}

export default Provider;