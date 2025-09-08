const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductsByCat,
  searchProducts,
  filterProducts,
} = require("../controllers/productController");

router.get("/all", getProducts);
router.get("/search", searchProducts);
router.get("/filter", filterProducts);
router.get("/:categoryId", getProductsByCat);

module.exports = router;
