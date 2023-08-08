import React from "react";

const Footer = props => {
  return (
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col s4">
            <h5 className="white-text">Location</h5>
            <p className="text-lighten-4">Address</p>
          </div>
          <div className="col s4">
            <h5 className="white-text">Call</h5>
            <p className="text-lighten-4">Mobile Number</p>
          </div>
          <div className="col s4">
            <h5 className="white-text">Email Us</h5>
            <p className="text-lighten-4">Email Address / Fax</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© Copyright reserved, 2018 </div>
      </div>
    </footer>
  );
};

export default Footer;
