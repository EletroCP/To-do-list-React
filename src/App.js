import './App.css';

function App() {
  document.title = 'To-do-List';
  return (
    <div className="App">
      <header className="App-header">
        <input type='text' className='toDo'/>
        <button className='insert'/>
      </header>
    </div>
  );
}

export default App;
