import { Pagination } from "@mui/material";



function Paginacion({nextHandler, prevHandler, productos}) {
  return (
    <Pagination count={10} color="primary"  />
  );
}

export default Paginacion;
