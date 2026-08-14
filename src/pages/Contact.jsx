import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-grid"></div>

        <div className="contact-container">
          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="contact-content">
            <div className="section-label">CONTACT US</div>

            <h1>
              Have a Business Challenge?
              <br />
              <span className="contact-highlight">
                Let's Solve It
                <br />
                Together.
              </span>
            </h1>

            <p>
              Tell us what's slowing your business down,
              <br />
              what you want to improve, or what you want to
              <br />
              build.
              <br />
              Let's explore how technology can help.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">☎</div>

                <div>
                  <strong>Phone</strong>
                  <span>+91 95003 24423</span>
                  <span>+91 80727 38767</span>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">@</div>

                <div>
                  <strong>Email</strong>
                  <span>info@greenwayinfitech.com</span>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">◎</div>

                <div>
                  <strong>Website</strong>
                  <span>www.greenwayinfitech.com</span>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>

                <div>
                  <strong>Location</strong>
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}

            <div className="contact-social">
              <h3>Follow Us</h3>

              <div className="contact-social-links">
                <a
                  href="https://www.linkedin.com/in/greenway-infitech-699658417/"
                  target="_blank"
                  rel="noreferrer"
                >
                  in
                </a>

                <a
                  href="https://www.instagram.com/greenway_infi_tech/"
                  target="_blank"
                  rel="noreferrer"
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

          {/* =========================
              CENTER CONTACT FORM
          ========================= */}

          <div className="contact-form-wrapper">
            <div className="contact-form-icon">◌</div>

            <h2>Tell Us About Your Challenge</h2>

            <div className="contact-form-line"></div>

            <form>
              <div className="contact-input">
                <span>♙</span>
                <input type="text" placeholder="Your Name" />
              </div>

              <div className="contact-input">
                <span>@</span>
                <input type="email" placeholder="Your Email" />
              </div>

              <div className="contact-input">
                <span>☎</span>
                <input type="tel" placeholder="Phone Number" />
              </div>

              <div className="contact-input contact-message">
                <span>◌</span>

                <textarea placeholder="How Can We Help?"></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Start the Conversation
                <span>→</span>
              </button>
            </form>
          </div>

          {/* =========================
              RIGHT GLOBE
          ========================= */}

          <div className="contact-visual"></div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
