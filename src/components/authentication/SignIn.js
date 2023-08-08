import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect, NavLink } from "react-router-dom";

class SignIn extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <main>
        <div className="container">
          <div className="card auth-actions">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                  <h5 className="card-title">Login</h5>
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field errors red-text">
                  {authError ? (
                    <p>
                      <i className="small material-icons">error</i>
                      {authError}
                    </p>
                  ) : null}
                </div>
                <div className="input-field">
                  <button className="btn">Login</button>
                </div>
              </form>
            </div>
            <div className="card-action">
              <NavLink to="/forgotpassword">Forgot Password</NavLink>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authErrorLogin,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
