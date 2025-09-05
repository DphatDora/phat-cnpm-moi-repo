const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductsByCat,
} = require("../controllers/productController");

router.get("/all", getProducts);
router.get("/:categoryId", getProductsByCat);

module.exports = router;
