import React, { useContext } from 'react';
import '../App.css';

import { MdOutlineAddTask } from 'react-icons/md'
import ToDoContext from '../context/Context';
import idGenerator from '../helpers/idGenerato';

const HeaderApp = () => {

  const {
    newTask,
    setTodo,
    setNewTask
  } = useContext(ToDoContext)

  const addTask = () => {
    setTodo((prevState) => [...prevState, {
      id: idGenerator(),
      task: newTask,
      disabled: true,
      display: 'none',
      textDecoration: 'none',
    }]);
    setNewTask('');
  }

  return (
    <header>
      <form className="App-header">
        <input
          type='text'
          className='toDo'
          placeholder='Nova tarefa'
          value={newTask}
          onChange={(({ target }) => setNewTask(target.value))}
          aria-label='Insira nova tarefa'
          required
        />
        <button
          className='insert'
          aria-label='Adiciona a nova tarefa'
          onClick={addTask}
          disabled={ !newTask ? true : false}
        >
          <MdOutlineAddTask className='icon' />
        </button>
      </form>
    </header>
  );
};

export default HeaderApp;