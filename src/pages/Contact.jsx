import { Link } from "react-router-dom";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const whatsappMessage = `Hello GreenWay Infitech,

Name: ${name}
Email: ${email}
Phone: ${phone}
Requirement: ${message}`;

    const whatsappURL = `https://wa.me/918072738767?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank");
  };

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

            <form onSubmit={handleSubmit}>
              <div className="contact-input">
                <span>♙</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="contact-input">
                <span>@</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="contact-input">
                <span>☎</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="contact-input contact-message">
                <span>◌</span>

                <textarea
                  name="message"
                  placeholder="How Can We Help?"
                  required
                ></textarea>
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
