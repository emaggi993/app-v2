import { pool } from "../db.sql.js";

export const getUser = async (req, res) => {
    try {
        console.log(req.body)
        const {username, password} = req.body;
    // const password = req.body['password'];
      const [result] = await pool.query(
        `SELECT nombre, nick, apellido, cod_usuario_sistema, id_grupo, telefono, razon_social FROM usuarios where nick = ? and contrasenha = ?`, [username, password]
      );
      if (result.length == 0) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };