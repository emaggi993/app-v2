import axios from "axios";

export const getProductos = async () => {
  return await axios.get("http://localhost:4000/productos");
};
