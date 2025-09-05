import React, { useRef, useEffect } from "react";

export default function ProductCard({ product }) {
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = imageRef.current;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      },
      {
        rootMargin: "50px",
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          ref={imageRef}
          data-src={`${product.image}`}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)}
        </p>
      </div>
    </div>
  );
}
