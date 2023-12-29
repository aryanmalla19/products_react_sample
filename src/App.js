import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/products";
import { Home } from "./pages/home/home";
import { Nav } from "./components/Nav";

function App() {
  return(
  <div>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </div>
  );
}

export default App;