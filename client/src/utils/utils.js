import { Buffer } from "buffer";
export const fFloat=(numero)=>{
    return parseFloat(numero).toFixed(2);
}
const obtenerImagen= (blob_imagen)=>{
    var buffer = Buffer.from(blob_imagen)
    var blob = new Blob([ buffer ], { type: 'image/jpeg' })
    
    return blob;
    
}
export const fRenderImageBlob=(blob_imagen)=>{
    return URL.createObjectURL(obtenerImagen(blob_imagen))
}