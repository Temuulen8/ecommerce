import { Router } from "express";

import {
  getAllProduct,
  getProduct,
  getRelProducts,
} from "../controllers/product-controller";

const router = Router();

router.route("/").get(getAllProduct);
router.route("/:productId").get(getProduct);
router.route("/related/:categoryId").get(getRelProducts);

export default router;
