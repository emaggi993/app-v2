

import CardProducto from "./CardProducto";
import Grid from '@mui/material/Grid';
export function ProductosList({productos}) {

  return (
    <>
      <Grid container  spacing={3} >
        {productos.map((producto, index) => (
            <Grid key={producto.id} item xs={12} sm={6} md={3}>
        <CardProducto producto={producto}  key= {index} />
        </Grid>
      ))}
        
      </Grid>
      
    </>
  );
}

