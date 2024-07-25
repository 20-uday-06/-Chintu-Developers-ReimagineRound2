import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../app/globals.css";
export default function Footer(){
    return (
       <>
  <footer className="footer">
    <div className="container1">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>About Apple</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Newsroom</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">Watch</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Warranty</a></li>
            <li><a href="#">Order Status</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fab fa-youtube"></i> YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Apple Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>


    </>
    )
} 