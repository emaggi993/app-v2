import Page from "../components/Page";
import { useState } from "react";
import { useEffect } from "react";
import { getProductos } from "../api/productos.api.js";
import { Container, Stack, Typography } from "@mui/material";
const page_name = "Productos";
import { ProductosList } from "../sections/@dashboard/productos/ProductosList";
import Paginacion from "../components/Paginacion";
import { ITEM_POR_PAGE } from "../utils/constantes";
import Swal from 'sweetalert2';
export function Productos() {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0)
  
  const loadProductos = async (page) => {
    mostrarAlerta()
    const {data} = await getProductos(page);
    setProductos([]);
      setProductos(data.data);
      setTotalPage(data.total);
      console.log(data);
    Swal.close()
  }
  const mostrarAlerta= ()=>{
    Swal.showLoading();
    
    
  }
  useEffect(() => {
    
    loadProductos();
  }, []);
  const onChangeHandler= (e,p)=>{
    console.log(p);
    setCurrentPage(p);
    loadProductos(p)
    
  }
  
  return (
    <Page title={page_name}>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Productos
        </Typography>
        <ProductosList productos = {productos}/>
        <Paginacion onChangeHandler={onChangeHandler} total_page={totalPage}  />
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
