import React, { useContext } from 'react';
import { FiCheckCircle, FiDelete, FiEdit } from 'react-icons/fi';
import ToDoContext from '../context/Context';
import setingsFunctions from '../helpers/setingsButtons';

const TaskApp = () => {

  const {
    todo,
    setTodo,
  } = useContext(ToDoContext);

  return (
    todo.map(({ id, task, disabled, display, textDecoration }) => (
      <div key={id} className="todo">
        {disabled ?
          <p
            onClick={() => setingsFunctions.openSetings(id, todo, setTodo)}
            style={{ textDecoration }}
          >
            {task}
          </p>
          : <input
            type="text"
            placeholder={task}
            className={`task toDo ${disabled ? '' : 'editable'}`}
            onChange={ ({target}) => setingsFunctions.changeTask(id, target, todo, setTodo)}
            id={id}
            disabled={disabled}
          />
        }
        <div className="setings" style={{ display }}>
          <div className='setingsContainer'>
            <button className="button" onClick={() => setingsFunctions.setCompleted(id, todo, setTodo)}>
              <FiCheckCircle className="icon" size={ '20px' } />
              </button>
            <button
              className="editTask button"
              id="test"
              onClick={() => {
                setingsFunctions.setDisabled(id, todo, setTodo)
              }}><FiEdit className='icon' size={ '20px' } /></button>
            <button
              className="button"
              onClick={() => setingsFunctions.setDelet(id, todo, setTodo)}
            >
              <FiDelete className='icon' size={ '20px' } />
            </button>
          </div>
        </div>
      </div>
    ))
  )
}

export default TaskApp;