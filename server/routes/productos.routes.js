import { Router } from "express";
import { getTasks, getTask, getAllProducts } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/productos/pagination/:p", getTasks);

router.get("/productos/:id", getTask);

router.get("/productos", getAllProducts);
export default router;
