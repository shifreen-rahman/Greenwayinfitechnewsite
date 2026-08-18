import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}

        <Link to="/" className="navbar-logo">
          <img src="/images/greenway-logo.png" height={90} width={400}></img>
        </Link>

        {/* NAVIGATION */}

        <nav className="navbar-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About Us</NavLink>

          <NavLink to="/services">Solutions</NavLink>

          <NavLink to="/training">Internship</NavLink>

          <NavLink to="/blog">Blog</NavLink>

          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        {/* CTA */}

        <Link
          to="/contact"
          className="navbar-consult"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://wa.me/918072738767?text=Hello%20GreenWay%20Infitech,%20I%20would%20like%20to%20book%20a%20free%20consultation.",
              "_blank",
            );
          }}
        >
          Book a Free Consultation
          <span>→</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
