

import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Label from "../../../components/Label";
import { fFloat, fRenderImageBlob } from "../../../utils/utils";


const ProductImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
  });
  const {status} = {status: "new"}

function CardProducto({producto}) {
    return (
        <Card>
          <Box sx={{ pt: '100%', position: 'relative' }}>
            {status && (
              <Label
                variant="filled"
                color={(status === 'sale' && 'error') || 'info'}
                sx={{
                  zIndex: 9,
                  top: 16,
                  right: 16,
                  position: 'absolute',
                  textTransform: 'uppercase',
                }}
              >
                {status}
              </Label>
            )}
            <ProductImgStyle alt={producto.descripcion} src={fRenderImageBlob(producto.blob_imagen)} />
          </Box>
    
          <Stack spacing={2} sx={{ p: 3 }}>
            <Link to={`${producto.id}`} color="inherit" underline="hover" component={RouterLink}>
              <Typography variant="subtitle2" noWrap>
                {producto.descripcion}
              </Typography>
            </Link>
    
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle1">
                
                
                💵&nbsp;{ fFloat(producto.precio) }
              </Typography>
            </Stack>
          </Stack>
        </Card>
      );
}

export default CardProducto