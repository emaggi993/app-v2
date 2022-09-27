import { Pagination } from "@mui/material";



function Paginacion({nextHandler, prevHandler, onChangeHandler ,productos, total_page}) {
    const estilo = {
        marginTop:"20px",
        display: "flex",
        justifyContent: "Center"
    }
  return (
    <Pagination onChange={(e,p)=>onChangeHandler(e,p)} style={estilo} count={total_page} color="primary"  />
  );
}

export default Paginacion;
