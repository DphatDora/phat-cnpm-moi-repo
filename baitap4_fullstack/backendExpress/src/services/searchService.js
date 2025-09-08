const client = require("../config/elasticClient");
const Product = require("../models/Product");
const Category = require("../models/Category");

const indexName = "products";

async function createIndex() {
  const exists = await client.indices.exists({ index: indexName });
  if (!exists) {
    await client.indices.create({
      index: indexName,
      body: {
        mappings: {
          properties: {
            name: { type: "text" },
            description: { type: "text" },
            price: { type: "float" },
            image: { type: "keyword" },
            category: { type: "keyword" },
            createdAt: { type: "date" },
          },
        },
      },
    });
    console.log(`--- Index "${indexName}" created`);
  }
}

// push product into Elasticsearch
async function indexProduct(product) {
  await client.index({
    index: indexName,
    id: product.id,
    body: {
      id: product.id,
      name: product.name,
      description: product.description,
      price: parseFloat(product.price),
      image: product.image,
      category: product.Category?.name || null,
      createdAt: product.createdAt,
    },
  });
}

// sync products from datbase to elastic
async function syncAllProducts() {
  const products = await Product.findAll({ include: Category });
  for (const product of products) {
    await indexProduct(product);
  }
  await client.indices.refresh({ index: indexName });
  console.log("All products synced to Elasticsearch");
}

module.exports = { createIndex, indexProduct, syncAllProducts };
