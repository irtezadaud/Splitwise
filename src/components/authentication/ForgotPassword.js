import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { forgotPassword } from "../../store/actions/authActions";

class ForgotPassword extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.forgotPassword(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { auth, authResetPassword } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <main>
        <div className="container">
          <div className="card auth-actions">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                  <h5 className="card-title">Forgot Password</h5>
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
                <div className="input-field errors">
                  {authResetPassword ? (
                    <p className="green-text">
                      Password reset email is sent out ! Please check your
                      inbox. Thank you !
                    </p>
                  ) : null}
                </div>
                <div className="input-field">
                  <button className="btn">Reset Password</button>
                </div>
              </form>
            </div>
            <div className="card-action">
              <NavLink to="/signin">Back to login</NavLink>
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
    authResetPassword: state.auth.authResetPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    forgotPassword: creds => dispatch(forgotPassword(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
