import React, { Component } from "react";
import { connect } from "react-redux";
import { setLocale } from "../../store/actions/localeActions";
import ContactUs from "./ContactUs";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <main>
        <div className="bgimg-1">
          <div className="caption">
            <span className="border">
              <NavLink to="/products">Enquire Samples</NavLink>
            </span>
          </div>
        </div>

        <div className="parallex container">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </div>

        <div className="bgimg-2" />

        <div className="parallex container">
          <h4>About Us</h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </div>

        <div className="bgimg-3" />

        <div className="parallex container">
          <h4>Contact Us</h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
          <ContactUs />
        </div>
      </main>
    );
  }
}

const mapsDispatchToProps = dispatch => {
  return {
    setLocale: lang => dispatch(setLocale(lang))
  };
};

export default connect(
  null,
  mapsDispatchToProps
)(Home);
