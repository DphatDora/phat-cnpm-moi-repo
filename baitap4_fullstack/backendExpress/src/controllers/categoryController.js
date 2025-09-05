const { getAllCategories } = require("../services/categoryService");

async function getCategories(req, res) {
  try {
    const categories = await getAllCategories();
    return res.json({ message: "Danh sách category", categories });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
}

module.exports = { getCategories };
