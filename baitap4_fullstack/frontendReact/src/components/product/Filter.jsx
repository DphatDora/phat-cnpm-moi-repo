import React, { useState, useEffect } from "react";
import { filterProductsApi, getCategoriesApi } from "../../util/api";
import Product from "./Product";

export default function Filter() {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    sort: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoriesApi();
        setCategories(response.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApplyFilter = async () => {
    try {
      setIsLoading(true);
      setHasSearched(true);

      // Chỉ gửi các filter có giá trị
      const activeFilters = {};
      if (filters.minPrice) activeFilters.minPrice = parseInt(filters.minPrice);
      if (filters.maxPrice) activeFilters.maxPrice = parseInt(filters.maxPrice);
      if (filters.sort) activeFilters.sort = filters.sort;
      if (filters.category) activeFilters.category = filters.category;

      const response = await filterProductsApi(activeFilters);
      setFilteredProducts(response.products || []);
    } catch (error) {
      console.error("Error filtering products:", error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearFilter = () => {
    setFilters({
      minPrice: "",
      maxPrice: "",
      sort: "",
      category: "",
    });
    setFilteredProducts([]);
    setHasSearched(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h3>Bộ lọc sản phẩm</h3>
      </div>

      <div className="filter-form">
        <div className="filter-row">
          <div className="filter-group">
            <label htmlFor="minPrice">Giá tối thiểu (VNĐ)</label>
            <input
              type="number"
              id="minPrice"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange("minPrice", e.target.value)}
              placeholder="Nhập giá tối thiểu"
              min="0"
            />
          </div>

          <div className="filter-group">
            <label htmlFor="maxPrice">Giá tối đa (VNĐ)</label>
            <input
              type="number"
              id="maxPrice"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
              placeholder="Nhập giá tối đa"
              min="0"
            />
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label htmlFor="sort">Sắp xếp theo</label>
            <select
              id="sort"
              value={filters.sort}
              onChange={(e) => handleFilterChange("sort", e.target.value)}
            >
              <option value="">Chọn cách sắp xếp</option>
              <option value="newest">Mới nhất</option>
              <option value="oldest">Cũ nhất</option>
              <option value="price_asc">Giá tăng dần</option>
              <option value="price_desc">Giá giảm dần</option>
              <option value="name_asc">Tên A-Z</option>
              <option value="name_desc">Tên Z-A</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="category">Danh mục</label>
            <select
              id="category"
              value={filters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="">Chọn danh mục</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-actions">
          <button
            className="filter-btn apply-btn"
            onClick={handleApplyFilter}
            disabled={isLoading}
          >
            {isLoading ? "Đang lọc..." : "Áp dụng bộ lọc"}
          </button>
          <button className="filter-btn clear-btn" onClick={handleClearFilter}>
            Xóa bộ lọc
          </button>
        </div>
      </div>

      {hasSearched && (
        <div className="filter-results">
          <div className="filter-results-header">
            <h4>
              Kết quả lọc: {filteredProducts.length} sản phẩm
              {filters.minPrice && ` (từ ${formatPrice(filters.minPrice)}`}
              {filters.maxPrice && ` đến ${formatPrice(filters.maxPrice)})`}
            </h4>
          </div>

          {isLoading ? (
            <div className="loading">Đang tải...</div>
          ) : filteredProducts.length > 0 ? (
            <Product products={filteredProducts} />
          ) : (
            <div className="no-results">
              Không tìm thấy sản phẩm nào phù hợp với bộ lọc
            </div>
          )}
        </div>
      )}
    </div>
  );
}
