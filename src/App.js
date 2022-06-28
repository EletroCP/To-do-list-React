import './App.css';
import HeaderApp from './componets/HeaderApp';
import Provider from './context/Provider';

function App() {
  document.title = 'To-do-List';
  return (
    <Provider className="App">
      <HeaderApp />
    </Provider>
  );
}

export default App;
