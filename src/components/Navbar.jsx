import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}

        <Link to="/" className="navbar-logo">
          <img src="/images/greenway-logo.png" height={100}></img>
        </Link>

        {/* NAVIGATION */}

        <nav className="navbar-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About Us</NavLink>

          <NavLink to="/services">Services</NavLink>

          <NavLink to="/training">Training</NavLink>

          <NavLink to="/blog">Blog</NavLink>

          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        {/* CTA */}

        <Link to="/contact" className="navbar-consult">
          Book Free Consultation
          <span>→</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
