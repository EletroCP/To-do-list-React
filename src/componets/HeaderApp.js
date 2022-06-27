import React from 'react';
import '../App.css';

const HeaderApp = () => {
  return (
    <header className="App-header">
      <input type='text' className='toDo'/>
      <button className='insert'/>
    </header>
  );
};

export default HeaderApp;