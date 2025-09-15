import React, { useState, useEffect } from "react";
import { getProductsByCategoryApi } from "../../util/api";
import ProductCard from "./ProductCard";

export default function SimilarProducts({ currentProduct }) {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      if (!currentProduct || !currentProduct.categoryId) {
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await getProductsByCategoryApi(currentProduct.categoryId, 1);
        
        if (response.products) {
          // Filter out the current product and limit to 4 similar products
          const filtered = response.products
            .filter(product => product.id !== currentProduct.id)
            .slice(0, 4);
          setSimilarProducts(filtered);
        }
      } catch (error) {
        console.error("Error fetching similar products:", error);
        setError("Không thể tải sản phẩm tương tự");
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [currentProduct]);

  if (loading) {
    return (
      <div className="similar-products">
        <h3>Sản phẩm tương tự</h3>
        <div className="loading">Đang tải sản phẩm tương tự...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="similar-products">
        <h3>Sản phẩm tương tự</h3>
        <div className="error">{error}</div>
      </div>
    );
  }

  if (!similarProducts || similarProducts.length === 0) {
    return (
      <div className="similar-products">
        <h3>Sản phẩm tương tự</h3>
        <div className="no-similar-products">
          Không có sản phẩm tương tự trong danh mục này.
        </div>
      </div>
    );
  }

  return (
    <div className="similar-products">
      <h3>Sản phẩm tương tự</h3>
      <div className="similar-products-grid">
        {similarProducts.map((product) => (
          <div key={product.id} className="similar-product-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}