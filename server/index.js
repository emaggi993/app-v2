import express from "express";
import cors from 'cors'
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import productRoutes from "./routes/productos.routes.js";
import loginRoutes from "./routes/login.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
const app = express();
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(indexRoutes);
app.use(productRoutes);
app.use(loginRoutes);
app.use(ordersRoutes);
app.listen(PORT);
console.log(`Servidor ejecutado en el puerto ${PORT}`);
