import { pool } from "../db.sql.js";
import { ORDERS, ITEM_POR_PAGINA, CATEGORY } from "../constantes.js";

export const getTasks = async (req, res) => {
  try {
    var orderBy = req.query['orderBy'];
    var category = req.query['category']? req.query['category']: '' ;
    console.log("categoria", category);
    let itemPorPagina= ITEM_POR_PAGINA;
    let query= req.params.p >1 ? `SELECT * FROM productos_view_api ${ CATEGORY[category]? CATEGORY[category]: 'where 1=2' }  ${ ORDERS[orderBy] } limit ${(req.params.p - 1)*itemPorPagina },${itemPorPagina}`: `SELECT * FROM productos_view_api ${ CATEGORY[category]? CATEGORY[category]: 'where 1=2' }  ${ ORDERS[orderBy] } limit ${itemPorPagina}`
    console.log("query", query)
    const [result] = await pool.query(query);
    const [total] = await pool.query("SELECT count(id) as total FROM productos_view_api ");
   
    // result['blob_imagen']= 
    res.json({total: Math.ceil(total[0].total/itemPorPagina), itemPorPagina: itemPorPagina, currentPage: parseInt(req.params.p),data:[ ...result]});
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
export const getPriceProducts = async (req, res)=>{
  try {
    const [result] = await pool.query(
      `SELECT * FROM products_prices_list`
    );
    if (result.length == 0) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
}
export const getAllProducts = async (req, res) => {
  try {
    var orderBy = req.query['orderBy'];
    
    console.log(req.query)
    const [result] = await pool.query(
      `SELECT * FROM productos_view_api ${ ORDERS[orderBy] }`
    );
    if (result.length == 0) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
}
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM productos_view_api where cod_articulo = ?",
      [req.params.id]
    );
    if (result.length == 0) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
