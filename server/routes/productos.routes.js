import { Router } from "express";
import { getTasks, getTask, getAllProducts, getPriceProducts } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/productos/pagination/:p", getTasks);

router.get("/productos/:id", getTask);

router.get("/productos", getAllProducts);
router.get("/prices_list", getPriceProducts);
export default router;
