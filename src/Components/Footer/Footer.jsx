import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img className="logo2" src="src/assets/logo.png" alt="logo" width="150px" />
        <p className="footer-company-name">Copyright 2024 ONE Proposal, Inc. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>STI College San Pablo</p>
        </div>
        <div>
          <i className="fa fa-envelope"> </i>
          <p>STI.SanPablo@gmail.com</p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Contact us on</span>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;