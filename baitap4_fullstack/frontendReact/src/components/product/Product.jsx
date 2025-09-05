import React, { forwardRef } from "react";
import ProductCard from "./ProductCard";

// dùng forwardRef để nhận ref từ cha
const Product = forwardRef(({ products }, lastProductRef) => {
  return (
    <div className="products-container">
      {products.map((product, index) => {
        const isLast = index === products.length - 1;
        return (
          <div
            key={product.id}
            ref={isLast ? lastProductRef : null} // gắn ref cho item cuối
          >
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
});

export default Product;
