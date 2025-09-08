import React, { useState, useEffect, useRef } from "react";
import { searchProductsApi } from "../../util/api";
import ProductCard from "./ProductCard";

export default function Search({ onProductSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const debounceTimeoutRef = useRef(null);

  // Debounce search
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (searchTerm.trim().length > 0) {
      debounceTimeoutRef.current = setTimeout(() => {
        performSearch(searchTerm);
      }, 300);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchTerm]);

  const performSearch = async (term) => {
    try {
      setIsLoading(true);
      const response = await searchProductsApi(term);
      setSearchResults(response.products || []);
      setShowDropdown(true);
      setSelectedIndex(-1);
    } catch (error) {
      console.error("Error searching products:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProductClick = (product) => {
    setSearchTerm("");
    setSearchResults([]);
    setShowDropdown(false);
    if (onProductSelect) {
      onProductSelect(product);
    }
  };

  const handleKeyDown = (e) => {
    if (!showDropdown || searchResults.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
          handleProductClick(searchResults[selectedIndex]);
        }
        break;
      case "Escape":
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="search-input"
        />
        {isLoading && <div className="search-loading">⏳</div>}
      </div>

      {showDropdown && searchResults.length > 0 && (
        <div className="search-dropdown" ref={dropdownRef}>
          <div className="search-results-header">
            <span>Tìm thấy {searchResults.length} sản phẩm</span>
          </div>
          <div className="search-results">
            {searchResults.map((product, index) => (
              <div
                key={product.id}
                className={`search-result-item ${
                  index === selectedIndex ? "selected" : ""
                }`}
                onClick={() => handleProductClick(product)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="search-result-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="search-result-info">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <span className="search-result-price">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showDropdown &&
        searchResults.length === 0 &&
        !isLoading &&
        searchTerm.trim().length > 0 && (
          <div className="search-dropdown" ref={dropdownRef}>
            <div className="search-no-results">Không tìm thấy sản phẩm nào</div>
          </div>
        )}
    </div>
  );
}
