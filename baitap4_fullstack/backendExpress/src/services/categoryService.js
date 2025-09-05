const Category = require("../models/Category");

async function getAllCategories() {
  return await Category.findAll({
    attributes: ["id", "name"],
  });
}

module.exports = { getAllCategories };
