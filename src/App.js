import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/Components/NavBar/navBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import PaymentMethods from "./pages/PaymentMethods";
import Shipping from "./pages/Shipping";
import Cart from "./Components/CartWidget/Cart";
import CartProvider from "./Context/CartContext";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Category"
              element={
                <ItemListContainer
                  color="#fb9a93"
                  greeting="Productos Disponibles"
                />
              }
            />

            <Route path="/category" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<PaymentMethods />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
