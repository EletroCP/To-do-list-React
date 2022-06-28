import './App.css';
import BodyApp from './componets/BodyApp';
import HeaderApp from './componets/HeaderApp';
import Provider from './context/Provider';

function App() {
  document.title = 'To-do-List';
  return (
    <Provider className="App">
      <HeaderApp />
      <BodyApp />
    </Provider>
  );
}

export default App;
