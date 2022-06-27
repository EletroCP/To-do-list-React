import React from 'react';
import '../App.css';

import { MdOutlineAddTask } from 'react-icons/md'

const HeaderApp = () => {
  return (
    <header className="App-header">
      <input
        type='text'
        className='toDo'
        placeholder='Nova tarefa'
      />
      <button className='insert'><MdOutlineAddTask className='iconInsert'/></button>
    </header>
  );
};

export default HeaderApp;