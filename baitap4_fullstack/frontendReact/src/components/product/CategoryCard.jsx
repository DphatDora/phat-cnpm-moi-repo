import React from "react";

export default function CategoryCard({ category, isActive, onClick }) {
  return (
    <div
      className={`category-card ${isActive ? "active" : ""}`}
      onClick={() => onClick(category.id)}
    >
      <h3>{category.name}</h3>
    </div>
  );
}
