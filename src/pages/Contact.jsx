function Contact() {
  return (
    <main className="contact-page">
      {/* =========================
          CONTACT HERO
      ========================= */}

      <section className="contact-hero">
        <div className="contact-grid"></div>

        <div className="contact-container">
          {/* LEFT CONTENT */}

          <div className="contact-content">
            <div className="section-label">CONTACT US</div>

            <h1>
              Let's Build the
              <br />
              Future Together
            </h1>

            <p>
              Have a project in mind or need more information?
              <br />
              We'd love to hear from you.
            </p>

            {/* CONTACT DETAILS */}

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">☎</div>

                <div>
                  <span>Phone</span>
                  <strong>+91 8022 738 767</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">@</div>

                <div>
                  <span>Email</span>
                  <strong>info@greenwayinfitech.com</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">🌐</div>

                <div>
                  <span>Website</span>
                  <strong>www.greenwayinfitech.com</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>

                <div>
                  <span>Location</span>
                  <strong>Chennai, Tamil Nadu, India</strong>
                </div>
              </div>
            </div>

            {/* SOCIAL */}

            <div className="contact-social">
              <span>Follow Us</span>

              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/greenway-infitech-699658417/"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="https://www.instagram.com/greenway_infi_tech/"
                  aria-label="Instagram"
                >
                  ◎
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61590704291245"
                  aria-label="Facebook"
                >
                  f
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}

          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>

            <form>
              <input type="text" placeholder="Your Name" />

              <input type="email" placeholder="Your Email" />

              <input type="tel" placeholder="Phone Number" />

              <textarea placeholder="Your Message" rows="5"></textarea>

              <button type="submit" className="btn-green">
                Send Message
                <span>→</span>
              </button>
            </form>
          </div>

          {/* RIGHT IMAGE */}

          <div className="contact-visual">
            <div className="contact-image-glow"></div>
          </div>
        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="contact-bottom-cta">
          <div className="contact-bottom-icon">◉</div>

          <div>
            <h2>We're Here to Help You Succeed.</h2>

            <p>
              Partner with us to transform your ideas into intelligent
              solutions.
            </p>
          </div>

          <a href="#contact-form" className="btn-green">
            Book Free Consultation
            <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
