import React from "react";
import CategoryCard from "./CategoryCard";

export default function Category({
  categories,
  activeCategory,
  onCategorySelect,
}) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          isActive={category.id === activeCategory}
          onClick={onCategorySelect}
        />
      ))}
    </div>
  );
}
