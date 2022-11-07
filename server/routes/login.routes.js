import { Router } from "express";
import { getUser } from "../controllers/login.controllers.js";

const router = Router();
router.post("/api/otrosrepuestos/usuario", getUser)
export default router;