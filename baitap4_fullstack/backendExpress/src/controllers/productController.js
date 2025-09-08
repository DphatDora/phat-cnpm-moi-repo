const {
  getAllProducts,
  getProductsByCategory,
} = require("../services/productService");
const client = require("../config/elasticClient");
const { indexName } = require("../services/searchService");

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

async function searchProducts(req, res) {
  try {
    const { name } = req.query;

    const result = await client.search({
      index: "products",
      body: {
        query: {
          match: {
            name: {
              query: name,
              fuzziness: "AUTO",
            },
          },
        },
      },
    });

    const hits = result.hits.hits.map((hit) => hit._source);

    res.json({ success: true, message: "Search products", products: hits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Search failed" });
  }
}

async function filterProducts(req, res) {
  try {
    const { category, minPrice, maxPrice, keyword, sort } = req.query;

    const must = [];
    const filter = [];

    // Tìm theo keyword (fuzzy)
    if (keyword) {
      must.push({
        multi_match: {
          query: keyword,
          fields: ["name", "description"],
          fuzziness: "AUTO",
        },
      });
    }

    // Filter theo category
    if (category) {
      filter.push({ term: { category } });
    }

    // Filter theo price
    if (minPrice || maxPrice) {
      const range = {};
      if (minPrice) range.gte = parseFloat(minPrice);
      if (maxPrice) range.lte = parseFloat(maxPrice);
      filter.push({ range: { price: range } });
    }

    // Sort (newest, price_asc, price_desc)
    let sortOption = [];
    if (sort === "newest") {
      sortOption = [{ createdAt: { order: "desc" } }];
    } else if (sort === "price_asc") {
      sortOption = [{ price: { order: "asc" } }];
    } else if (sort === "price_desc") {
      sortOption = [{ price: { order: "desc" } }];
    }

    const result = await client.search({
      index: "products",
      body: {
        query: {
          bool: {
            must,
            filter,
          },
        },
        sort: sortOption,
      },
    });

    const hits = result.hits.hits.map((hit) => hit._source);

    res.json({ success: true, message: "Filter products", products: hits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Filter failed" });
  }
}

module.exports = {
  getProducts,
  getProductsByCat,
  searchProducts,
  filterProducts,
};
