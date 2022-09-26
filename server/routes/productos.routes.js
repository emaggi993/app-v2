import { Router } from "express";
import { getTasks, getTask } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/productos", getTasks);

router.get("/productos/:id", getTask);
export default router;
