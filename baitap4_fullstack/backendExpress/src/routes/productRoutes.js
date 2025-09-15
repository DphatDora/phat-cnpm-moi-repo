const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getProducts,
  getProductsByCat,
  searchProducts,
  filterProducts,
  getProductDetail,
  buyProduct,
  commentProduct,
} = require("../controllers/productController");

router.get("/all", getProducts);
router.get("/search", searchProducts);
router.get("/filter", filterProducts);
router.get("/:categoryId", getProductsByCat);
router.get("/detail/:id", getProductDetail);
router.post("/buy", authMiddleware, buyProduct);
router.post("/comment", authMiddleware, commentProduct);
module.exports = router;
