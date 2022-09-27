import axios from "axios";

export const getProductos = async (pag=1) => {
  return await axios.get(`http://localhost:4000/productos/pagination/${pag}`);
};
