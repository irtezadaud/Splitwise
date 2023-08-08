import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { NavLink, Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    contactNumber: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <main>
        <div className="container">
          <div className="card auth-actions">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                  <h5 className="card-title">Register</h5>
                </div>
                <div className="row">
                  <div className="col m6 input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col m6 input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col m6 input-field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col m6 input-field">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 input-field">
                    <label htmlFor="contactNumber">Mobile Number</label>
                    <input
                      type="text"
                      id="contactNumber"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="input-field errors">
                  {authError ? (
                    <p className="red-text">
                      <i className="small material-icons">error</i>
                      {authError}
                    </p>
                  ) : null}
                </div>
                <div className="input-field">
                  <button className="btn">Register</button>
                </div>
              </form>
            </div>
            <div className="card-action">
              <NavLink to="/signin">
                Already Registered? Click here to login
              </NavLink>
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
    authError: state.auth.authErrorRegister
  };
};

const mapsDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapsDispatchToProps
)(Register);
