import { pool } from "../db.sql.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM productos_view limit 20");
    console.log(result)
    // result['blob_imagen']= 
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
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
