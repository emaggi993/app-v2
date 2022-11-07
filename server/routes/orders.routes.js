import { Router } from "express";
import { setOrders, getOrders, getOrder } from "../controllers/orders.controllers.js";

const router = Router();
router.post("/api/otrosrepuestos/orders/create", setOrders)
router.get("/api/otrosrepuestos/orders/:idUser", getOrders)
router.get("/api/otrosrepuestos/order/:idUser&:idOrder", getOrder)
export default router;