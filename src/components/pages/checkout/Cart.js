import React from "react";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  const cartItems = cart.length ? (
    <div className="cart-products">
      <table className="striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price (in Rs.)</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(products => {
            return (
              <tr key={products.productId}>
                <td>{products.product.title}</td>
                <td>{products.product.price}</td>
                <td>{products.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="cart-empty"> Your cart is empty ! </div>
  );
  return <div className="cart">{cartItems}</div>;
};

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};

export default connect(mapStateToProps)(Cart);
