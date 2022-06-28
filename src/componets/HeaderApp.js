import React, { useContext } from 'react';
import '../App.css';

import { MdOutlineAddTask } from 'react-icons/md'
import ToDoContext from '../context/Context';

const HeaderApp = () => {

  const {
    setTodo,
  } = useContext(ToDoContext)

  return (
    <header className="App-header">
      <input
        type='text'
        className='toDo'
        placeholder='Nova tarefa'
      />
      <button className='insert'><MdOutlineAddTask className='iconInsert' /></button>
    </header>
  );
};

export default HeaderApp;