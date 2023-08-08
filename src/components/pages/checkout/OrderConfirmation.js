import React from "react";
import { connect } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import moment from "moment";

const OrderConfirmation = props => {
  const { auth, orders } = props;
  if (!auth.uid) return <Redirect to="/" />;
  const links = orders ? (
    <div className="container order-confirmation">
      <div className="card">
        <div className="card-content">
          <div className="input-field">
            <h5 className="card-title">Order Confirmation</h5>
          </div>
          <div className="input-field">
            <table className="striped responsive-table">
              <tbody>
                <tr>
                  <td>Order Number: </td>
                  <td>{orders.orderNo}</td>
                </tr>
                <tr>
                  <td>Order Status: </td>
                  <td>{orders.orderStatus}</td>
                </tr>
                <tr>
                  <td>Delivery Address </td>
                  <td>
                    <div>{orders.deliveryAddress.name}</div>
                    <div>{orders.deliveryAddress.address1}</div>
                    <div>{orders.deliveryAddress.address2}</div>
                    <div> {orders.deliveryAddress.city}</div>
                    <div>{orders.deliveryAddress.state}</div>
                    <div>{orders.deliveryAddress.country}</div>
                    <div>{orders.deliveryAddress.contact}</div>
                  </td>
                </tr>
                <tr>
                  <td>Order Date: </td>
                  <td>
                    {moment(orders.createdDate).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-action">
          <NavLink to="/products">Place New Order</NavLink>
        </div>
      </div>
    </div>
  ) : (
    <div className="container order-confirmation">
      Please wait ! Loading Orders ...
      <br />
      If not displayed check My Orders page to view all your orders.
      <br />
      Thank You !
    </div>
  );
  return <main>{links}</main>;
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    orders: state.order.orderDetails
  };
};

export default connect(mapStateToProps)(OrderConfirmation);
