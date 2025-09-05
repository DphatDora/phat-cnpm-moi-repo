import React, { useState, useEffect, useCallback, useRef } from "react";
import { getCategoriesApi, getProductsByCategoryApi } from "../util/api";
import Category from "../components/product/Category";
import Product from "../components/product/Product";

export default function ProductPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoriesApi();
        setCategories(response.categories);
        if (response.categories.length > 0) {
          setActiveCategoryId(response.categories[0].id);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (activeCategoryId) {
      setProducts([]);
      setCurrentPage(1);
      setHasMore(true);
      loadProducts();
    }
  }, [activeCategoryId]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await getProductsByCategoryApi(activeCategoryId, 1);
      setProducts(response.products);
      setHasMore(response.pagination.nextUrl !== null);
      setCurrentPage(2);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreProducts = async () => {
    if (loading || !hasMore) return;
    try {
      setLoading(true);
      const response = await getProductsByCategoryApi(
        activeCategoryId,
        currentPage
      );
      setProducts((prev) => [...prev, ...response.products]);
      setHasMore(response.pagination.nextUrl !== null);
      setCurrentPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching more products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  return (
    <div className="product-page">
      <Category
        categories={categories}
        activeCategory={activeCategoryId}
        onCategorySelect={handleCategorySelect}
      />
      <Product products={products} ref={lastProductRef} />
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
}
