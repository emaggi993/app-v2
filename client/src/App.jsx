import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavbarApp";
import {Productos, Producto }from "./pages/Productos";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout";
function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<Producto />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
