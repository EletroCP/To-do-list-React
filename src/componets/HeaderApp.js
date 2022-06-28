import React, { useContext } from 'react';
import '../App.css';

import { MdOutlineAddTask } from 'react-icons/md'
import ToDoContext from '../context/Context';

const HeaderApp = () => {

  const {
    newTask,
    setTodo,
    setNewTask
  } = useContext(ToDoContext)

  const addTask = () => {
    setTodo((prevState) => [...prevState, newTask]);
    setNewTask('');
  }

  return (
    <header className="App-header">
      <input
        type='text'
        className='toDo'
        placeholder='Nova tarefa'
        value={ newTask }
        onChange={(({ target }) => setNewTask(target.value))}
        aria-label='Insira nova tarefa'
      />
      <button 
        className='insert'
        aria-label='Adiciona a nova tarefa'
        onClick={ addTask }
        >
          <MdOutlineAddTask className='icon' />
      </button>
    </header>
  );
};

export default HeaderApp;