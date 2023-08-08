import React from "react";
import ProductSummary from "./ProductSummary";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      {products &&
        products.map(product => {
          return (
            <ProductSummary
              addToCart={addToCart}
              product={product}
              key={product.id}
            />
          );
        })}
    </div>
  );
};

export default ProductList;
