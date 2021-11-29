
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/Components/NavBar/navBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from './pages/contact';
import PaymentMethods from "./pages/PaymentMethods";
import Shipping from "./pages/Shipping";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>

      <Route path="/" element={<ItemListContainer color="#fb9a93" greeting="Productos Disponibles" />} />
      <Route path="/category" element={<ItemListContainer/>} />
      <Route path="/category/:catId" element={<ItemListContainer/>} />
      <Route path="/product/:itemId" element={<ItemDetailContainer/>} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<PaymentMethods />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
