import { Router } from "express";

import authRouter from "./auth.js";
import productRouter from "./product.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/product", productRouter);

export default router;
