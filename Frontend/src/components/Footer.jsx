import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import the CSS file

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-column">
          <h3>LINKS</h3>
          <Link to="/home" className="footer-link">
            Home
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/blogs" className="footer-link">
            Blogs
          </Link>
          <Link to="/resources" className="footer-link">
            Resources
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>CONTACT</h3>
          <p>KOhalpur-6, Shivanagar, Nepal</p>
          <p>+977 980 8825 852</p>
          <p>
            <a className="footer-link">info@tourTravel.com.np</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 Tour Management. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="footer-link">
            Terms of Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
