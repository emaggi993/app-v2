import { Router } from "express";
import { getProductsPaginated, getProduct, getAllProducts, getPriceProducts } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/productos/pagination/:p", getProductsPaginated);

router.get("/productos/:id", getProduct);

router.get("/productos", getAllProducts);
router.get("/prices_list", getPriceProducts);
export default router;
