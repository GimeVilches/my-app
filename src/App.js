
import './App.css';
import NavBar from "../src/Components/NavBar/navBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer color="#fb9a93" greeting="Productos Disponibles"  />
    </div>
  );
}

export default App;
