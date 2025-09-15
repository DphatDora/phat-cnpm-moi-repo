import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetailApi } from "../util/api";
import ProductDetail from "../components/product/ProductDetail";
import CommentProduct from "../components/product/CommentProduct";
import SimilarProducts from "../components/product/SimilarProducts";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [soldQuantity, setSoldQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getProductDetailApi(id);
        if (response.success) {
          setProduct(response.product);
          setSoldQuantity(response.soldQuantity);
        } else {
          setError("Không thể tải thông tin sản phẩm");
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
        setError("Có lỗi xảy ra khi tải thông tin sản phẩm");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetail();
    }
  }, [id]);

  const handleCommentAdded = (newComment) => {
    // Refresh product to get updated comments
    setProduct((prevProduct) => ({
      ...prevProduct,
      Comments: [...(prevProduct.Comments || []), newComment],
    }));
  };

  if (loading) {
    return <div className="loading">Đang tải thông tin sản phẩm...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="error">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="product-detail-page">
      <ProductDetail product={product} soldQuantity={soldQuantity} />
      <CommentProduct
        productId={id}
        comments={product.Comments || []}
        onCommentAdded={handleCommentAdded}
      />
      <SimilarProducts currentProduct={product} />
    </div>
  );
}
