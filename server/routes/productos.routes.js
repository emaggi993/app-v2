import { Router } from "express";
import { pingPong, getProductsPaginated, getProduct, getAllProducts, getPriceProducts } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/api/otrosrepuestos/", pingPong);

router.get("/api/otrosrepuestos/productos/pagination/:p", getProductsPaginated);

router.get("/api/otrosrepuestos/productos/:id", getProduct);

router.get("/api/otrosrepuestos/productos", getAllProducts);
router.get("/api/otrosrepuestos/prices_list", getPriceProducts);
export default router;
