import { pool } from "../db.sql.js";

export const getTasks = async (req, res) => {
  try {
    let itemPorPagina= 20;
    let query= req.params.p >1 ? `SELECT * FROM productos_view limit ${(req.params.p - 1)*10 },${itemPorPagina}`: `SELECT * FROM productos_view limit ${itemPorPagina}`
    const [result] = await pool.query(query);
    const [total] = await pool.query("SELECT count(id) as total FROM productos_view ");
   
    // result['blob_imagen']= 
    res.json({total: Math.ceil(total[0].total/itemPorPagina), itemPorPagina: itemPorPagina, currentPage: parseInt(req.params.p),data:[ ...result]});
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM productos_view "
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
      "SELECT * FROM productos_view where cod_articulo = ?",
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
