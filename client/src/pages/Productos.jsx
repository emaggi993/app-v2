import Page from "../components/Page";
import { useState } from "react";
import { useEffect } from "react";
import { getProductos } from "../api/productos.api.js";
import { Container, Stack, Typography } from "@mui/material";
const page_name = "Productos";
import { ProductosList } from "../sections/@dashboard/productos/ProductosList";
import Paginacion from "../components/Paginacion";
export function Productos() {
  const [productos, setProductos] = useState([]);
    

  useEffect(() => {
    async function loadProductos() {
      const respuesta = await getProductos();
      setProductos(respuesta.data);
      console.log(respuesta.data);
    }
    loadProductos();
  }, []);
  const nextHandler = ()=>{
    console.log("next");
  }
  const prevHandler = ()=>{
    console.log("prev");
  }
  return (
    <Page title={page_name}>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Productos
        </Typography>
        <ProductosList productos = {productos}/>
        <Paginacion productos= {productos} nextHandler = {nextHandler} prevHandler= {prevHandler} />
      </Container>
    </Page>
  );
}

export function Producto() {
  return (
    <Page title={page_name}>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Producto individual
        </Typography>
      </Container>
    </Page>
  )
}
