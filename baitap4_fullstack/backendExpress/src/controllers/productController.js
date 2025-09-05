const {
  getAllProducts,
  getProductsByCategory,
} = require("../services/productService");

async function getProducts(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const result = await getAllProducts(page, baseUrl);
    return res.json({
      message: "Danh sách sản phẩm",
      products: result.products,
      pagination: result.pagination,
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
}

async function getProductsByCat(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const { categoryId } = req.params;
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const result = await getProductsByCategory(categoryId, page, baseUrl);
    return res.json({
      message: "Danh sách sản phẩm theo category",
      products: result.products,
      pagination: result.pagination,
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
}

module.exports = { getProducts, getProductsByCat };
