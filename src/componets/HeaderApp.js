import React, { useContext } from 'react';
import '../App.css';
import { MdOutlineAddTask } from 'react-icons/md'
import ToDoContext from '../context/Context';
import idGenerator from '../helpers/idGenerato';
import setLocal from '../helpers/setLocalStorage';

const HeaderApp = () => {

  const {
    newTask,
    setTodo,
    setNewTask
  } = useContext(ToDoContext)

  const addTask = () => {
    setTodo((prevState) => {
    const thisState = [...prevState, {
      id: idGenerator(),
      task: newTask,
      disabled: true,
      display: 'none',
      textDecoration: 'none',
    }]
    setLocal(thisState)
    return thisState;
  });
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
          <MdOutlineAddTask className='icon' size={ '30px' } />
        </button>
      </form>
    </header>
  );
};

export default HeaderApp;