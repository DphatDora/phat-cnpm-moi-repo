const Product = require("../models/Product");
const Category = require("../models/Category");

const PAGINATION_LIMIT = parseInt(process.env.PAGINATION_LIMIT) || 10;

async function getAllProducts(page = 1, baseUrl) {
  const limit = PAGINATION_LIMIT;
  const offset = (page - 1) * limit;

  const { count, rows } = await Product.findAndCountAll({
    limit,
    offset,
    order: [["id", "ASC"]],
  });

  const nextUrl =
    offset + limit < count
      ? `${baseUrl}/api/product/all?page=${page + 1}`
      : null;

  return {
    products: rows,
    pagination: {
      total: count,
      limit,
      nextUrl,
    },
  };
}

async function getProductsByCategory(categoryId, page = 1, baseUrl) {
  const limit = PAGINATION_LIMIT;
  const offset = (page - 1) * limit;

  const { count, rows } = await Product.findAndCountAll({
    where: { categoryId },
    limit,
    offset,
    include: [{ model: Category, attributes: ["id", "name"] }],
    order: [["id", "ASC"]],
  });

  const nextUrl =
    offset + limit < count
      ? `${baseUrl}/api/product/${categoryId}?page=${page + 1}`
      : null;

  return {
    products: rows,
    pagination: {
      total: count,
      limit,
      nextUrl,
    },
  };
}

module.exports = { getAllProducts, getProductsByCategory };
