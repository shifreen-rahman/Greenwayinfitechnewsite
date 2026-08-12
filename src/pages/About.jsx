import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      {/* =========================
          ABOUT HERO
      ========================= */}

      <section className="about-hero">
        <div className="about-grid"></div>

        <div className="about-container">
          {/* LEFT CONTENT */}

          <div className="about-content">
            <div className="section-label">ABOUT US</div>

            <h1>
              Building the Future
              <br />
              Through <span>Innovation</span>
            </h1>

            <p>
              GreenWay Infitech is a next-generation AI and digital solutions
              company helping businesses unlock the power of Artificial
              Intelligence, Automation, Data Science, and Digital
              Transformation.
            </p>

            <p>
              We build intelligent solutions that drive efficiency, enhance
              customer experience, and create sustainable growth.
            </p>

            <Link to="/contact" className="btn-green about-button">
              Know More About Us
              <span>→</span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}

          <div className="about-visual">
            <div className="about-image-glow"></div>
          </div>
        </div>
      </section>

      {/* =========================
          WHY GREENWAY
      ========================= */}

      <section className="why-greenway">
        <div className="why-header">
          <div className="section-label">WHY GREENWAY INFITECH?</div>

          <p>
            We combine technology, expertise, and strategy to deliver measurable
            impact for your business.
          </p>
        </div>

        <div className="why-cards">
          <div className="why-card tech-card">
            <div className="why-icon">✦</div>

            <h3>
              Innovation
              <span>First</span>
            </h3>

            <p>
              We leverage the latest technologies to deliver innovative
              solutions.
            </p>
          </div>

          <div className="why-card tech-card">
            <div className="why-icon">⌁</div>

            <h3>
              Business
              <span>Centric</span>
            </h3>

            <p>
              We align technology with your business goals for maximum impact.
            </p>
          </div>

          <div className="why-card tech-card">
            <div className="why-icon">⬡</div>

            <h3>
              End-to-End
              <span>Expertise</span>
            </h3>

            <p>
              From strategy to deployment, we cover every stage of your journey.
            </p>
          </div>

          <div className="why-card tech-card">
            <div className="why-icon">✧</div>

            <h3>
              Customised
              <span>Solutions</span>
            </h3>

            <p>Tailored solutions that fit your unique business needs.</p>
          </div>

          <div className="why-card tech-card">
            <div className="why-icon">◇</div>

            <h3>
              Long-Term
              <span>Partnership</span>
            </h3>

            <p>We grow with you, from strategy to execution and beyond.</p>
          </div>

          <div className="why-card tech-card">
            <div className="why-icon">⌁</div>

            <h3>
              Results-Driven
              <span>Execution</span>
            </h3>

            <p>
              We focus on measurable outcomes that drive real business growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
