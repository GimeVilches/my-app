
import './App.css';
import NavBar from "../src/Components/NavBar/navBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer color="#fb9a93" title="Productos Disponibles" />
    </div>
  );
}

export default App;
