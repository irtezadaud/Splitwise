import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import ProductsList from "./products/ProductsList";
import Cart from "./checkout/Cart";
import CartAddress from "./checkout/CartAddress";
import { addToCart } from "../../store/actions/cartActions";
import { createOrder } from "../../store/actions/orderActions";

class Products extends Component {
  state = {};

  handleAddToCart = e => {
    const product = e.target.id;
    this.props.addToCart(product);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { auth, cart } = this.props;
    if (!auth.uid) {
      this.props.history.push("/signin");
    } else {
      this.props.createOrder(cart, this.state, auth.uid);
      this.props.history.push("/orderconfirmation");
    }
  };
  render() {
    const { products } = this.props;
    const links = products ? (
      <ProductsList addToCart={this.handleAddToCart} products={products} />
    ) : (
      <div>Loading Products ...</div>
    );
    return (
      <main>
        <div className="row">
          <div className="col s12 m7">{links}</div>
          <div className="col s12 m5">
            <div className="card">
              <div className="card-content">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <h5 className="card-title">Checkout Cart</h5>
                  </div>
                  <Cart />
                  <CartAddress handleChange={this.handleChange} />
                  <div className="input-field">
                    <button className="btn">Make Enquiry & Order</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    products: state.firestore.ordered.products,
    cart: state.cart.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: productId => dispatch(addToCart(productId)),
    createOrder: (cart, deliveryAddress, uid) =>
      dispatch(createOrder(cart, deliveryAddress, uid))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: "products"
    }
  ])
)(Products);
