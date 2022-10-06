import { Router } from "express";
import { pingPong, getProductsPaginated, getProduct, getAllProducts, getPriceProducts } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/api/otrosrespuestos/", pingPong);

router.get("/api/otrosrespuestos/productos/pagination/:p", getProductsPaginated);

router.get("/api/otrosrespuestos/productos/:id", getProduct);

router.get("/api/otrosrespuestos/productos", getAllProducts);
router.get("/api/otrosrespuestos/prices_list", getPriceProducts);
export default router;
