import React from "react";
import { NavLink, Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Header = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <header>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Logo
          </Link>
          {links}
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="tab">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="tab">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Header);
