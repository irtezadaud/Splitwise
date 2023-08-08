import React from "react";

const CartAddress = props => {
  return (
    <div className="address-container">
      <div className="row">
        <div className="input-field col s12 m6">
          <input
            placeholder="Name"
            className="validate"
            type="text"
            id="name"
            required
            onChange={props.handleChange}
          />
        </div>
        <div className="input-field col s12 m6">
          <input
            placeholder="Email"
            className="validate"
            type="email"
            id="email"
            required
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 m6">
          <input
            placeholder="Address 1"
            className="validate"
            type="text"
            id="address1"
            required
            onChange={props.handleChange}
          />
        </div>

        <div className="input-field col s12 m6">
          <input
            placeholder="Address 2"
            className="validate"
            type="text"
            id="address2"
            required
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 m6">
          <input
            placeholder="City"
            className="validate"
            type="text"
            id="city"
            required
            onChange={props.handleChange}
          />
        </div>
        <div className="input-field col s12 m6">
          <input
            placeholder="State"
            className="validate"
            type="text"
            id="state"
            required
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 m6">
          <input
            placeholder="Country"
            className="validate"
            type="text"
            id="country"
            required
            onChange={props.handleChange}
          />
        </div>
        <div className="input-field col s12 m6">
          <input
            placeholder="Contact Number"
            className="validate"
            type="text"
            id="contact"
            required
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CartAddress;
