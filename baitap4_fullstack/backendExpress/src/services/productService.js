const Product = require("../models/Product");
const Category = require("../models/Category");
const Purchase = require("../models/Purchase");
const Comment = require("../models/Comment");
const User = require("../models/User");
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

async function getProductDetailService(productId) {
  const product = await Product.findByPk(productId, {
    include: [
      {
        model: Comment,
        attributes: ["id", "comment"],
        include: [
          {
            model: User,
            attributes: ["name"],
          },
        ],
      },
    ],
  });

  if (!product) return null;

  const soldQuantity = await Purchase.sum("quantity", {
    where: { productId },
  });

  return { product, soldQuantity: soldQuantity || 0 };
}

async function buyProductService(userId, productId, quantity) {
  const product = await Product.findByPk(productId);
  if (!product) return null;

  const purchase = await Purchase.create({ userId, productId, quantity });
  return purchase;
}

async function commentProductService(userId, productId, comment) {
  const product = await Product.findByPk(productId);
  if (!product) return null;

  const newComment = await Comment.create({ userId, productId, comment });
  return newComment;
}

module.exports = {
  getAllProducts,
  getProductsByCategory,
  getProductDetailService,
  buyProductService,
  commentProductService,
};
