import { Router } from "express";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.js";

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);

export default router;
