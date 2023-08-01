import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="my-section d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="span-container me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a
            href="https://www.facebook.com/"
            className="me-4 text-reset"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/_"
            className="me-4 text-reset"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset" target="_blank">
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="me-4 text-reset"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/"
            className="me-4 text-reset"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/sanjaymohansingh"
            className="me-4 text-reset"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="my-section">
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/exercise-videos">Exercise Videos</a>
              </li>
              <li>
                <a href="/healthy-recipes">Healthy Recipes</a>
              </li>
              <li>
                <a href="/reminders">Reminders</a>
              </li>
              <li>
                <a href="/emergency-contact">Emergency Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-info">
            <p>Contact us: info@elerlycare.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main Street, Patna, india</p>
          </div>
        </div>
      </section>
      <section className="my-section-2">
        <div className="container text-center text-md-start mt-5">
          <div
            className="container text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            &copy; {new Date().getFullYear()} ElderlyCare. All rights reserved.
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
