import React from "react";

const ProductSummary = ({ product, addToCart }) => {
  return (
    <div className="card product-cards">
      <div className="card-image waves-effect waves-block waves-light" />
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {product.title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>{product.description}</p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {product.title}
          <i className="material-icons right">close</i>
        </span>
        <p>{product.description}</p>
      </div>
      <div className="card-action center">
        <div className="btn" id={product.id} onClick={addToCart}>
          Add To Cart
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
