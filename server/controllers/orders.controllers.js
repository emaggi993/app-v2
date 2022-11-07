import { pool } from "../db.sql.js";

export const setOrders= async (req, res) =>{
    const {cod_usuario_sistema, total, fecha, details} = req.body
    console.log(Date(fecha))
    const [result] = await pool.query(
        "INSERT INTO orders (cod_usuario_sistema, total, details) values (?,?,?)",
      [cod_usuario_sistema, total,  details]
      );
      if (result.length == 0) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }
      res.status(200).json(result[0]);
}
export const getOrder = async (req, res)=>{
  const sql =`SELECT * from orders o where o.cod_usuario_sistema= '1344' and o.id=5`
}
export const getOrders = async (req, res)=>{
  try {
    console.log(req.params)
    const {idUser} = req.params
    // return res.status(200).json({"id":idUser})
    const sql = `SELECT * from orders o where o.cod_usuario_sistema= ${idUser} order by fecha DESC`
    const [result] = await pool.query(sql );
    if (result.length == 0) {
      return res.status(404).json({ mensaje: "Sin pedidos" });
    }
    
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
  
}