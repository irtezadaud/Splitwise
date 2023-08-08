import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { IntlProvider } from "react-intl";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Register from "./components/authentication/Register";
import SignIn from "./components/authentication/SignIn";
import ForgotPassword from "./components/authentication/ForgotPassword";
import OrderConfirmation from "./components/pages/checkout/OrderConfirmation";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import Profile from "./components/pages/profile/Profile";
import { connect } from "react-redux";
//import messages from "./config/messages";

import "./styles.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-content">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={ContactUs} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={SignIn} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/profile" component={Profile} />
            <Route path="/orderconfirmation" component={OrderConfirmation} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    lang: state.locale.lang
  };
};

export default connect(mapStateToProps)(App);
