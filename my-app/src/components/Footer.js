import React from 'react';

const Footer = () => {
  return (
    <section id="footer" data-aos="fade-up" data-aos-duration="1000">
      <div className="footer">
        <div className="logo2">
          <img src="./Image/logo.png" alt="Footer Logo" />
        </div>
        <p>
          The Exclusive Unisex Salon in your town acquainted with world-class tools and professionals for stunning looks and absolute luxury.
        </p>
        <div className="footer-contact">
          <span className="facebook"><i className="fa-brands fa-facebook"></i></span>
          <span className="twitter"><i className="fa-brands fa-twitter"></i></span>
          <span className="instagram"><i className="fa-brands fa-instagram"></i></span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
