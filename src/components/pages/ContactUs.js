import React, { Component } from "react";
import { connect } from "react-redux";
import { contactUs } from "../../store/actions/contactUsActions";

class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    contactNumber: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.contactUs(this.state);
  };

  render() {
    const { contactError, contactSuccess } = this.props;
    return (
      <main>
        <div className="container">
          <div className="card auth-actions">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                  <h5 className="card-title">Contact Us</h5>
                </div>
                <div className="row">
                  <div className="col s12 input-field">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 input-field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
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
                <div className="row">
                  <div className="col s12 input-field">
                    <textarea
                      id="content"
                      required
                      className="materialize-textarea"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="content">Message</label>
                  </div>
                </div>
                <div className="input-field errors">
                  {contactError ? (
                    <p className="red-text">
                      <i className="small material-icons">error</i>
                      {contactError}
                    </p>
                  ) : contactSuccess ? (
                    <p className="green-text">
                      Reference Number : {contactSuccess} is created ! Our
                      customer executive will contact you as soon as possible.
                      Thank you !
                    </p>
                  ) : null}
                </div>
                <div className="input-field">
                  <button className="btn">Submit</button>
                </div>
              </form>
            </div>
            <div className="card-action">
              <span className="contact-actions">
                * Our representative will contact you within 24 hours
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactError: state.contactUs.contactError,
    contactSuccess: state.contactUs.contactSuccess
  };
};

const mapsDispatchToProps = dispatch => {
  return {
    contactUs: anonymousUser => dispatch(contactUs(anonymousUser))
  };
};

export default connect(
  mapStateToProps,
  mapsDispatchToProps
)(ContactUs);
