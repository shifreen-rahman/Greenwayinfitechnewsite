import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="home-hero">
        <div className="home-hero-grid"></div>

        <div className="home-hero-container">
          {/* LEFT SIDE */}

          <div className="home-hero-content">
            <div className="home-eyebrow">
              AI ISN'T THE FUTURE.
              <br />
              <span>— IT'S THE DOORWAY.</span>
            </div>

            <h1>
              WE DON'T JUST
              <br />
              ADAPT TO AI.
              <br />
              <span>WE BUILD</span>
              <br />
              <span>WHAT'S NEXT.</span>
            </h1>

            <p>
              We help businesses unlock the power of Artificial Intelligence,
              Automation, Data Science, and Digital Transformation to create
              intelligent solutions for a smarter tomorrow.
            </p>

            <div className="home-hero-buttons">
              <Link to="/contact" className="btn-green">
                Book Free Consultation
                <span>→</span>
              </Link>

              <Link to="/services" className="btn-outline">
                Explore Our Services
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}

          <div className="home-hero-visual">
            <div className="home-image-glow"></div>

            <img
              src="/images/home-hero.png"
              alt="Artificial Intelligence and Digital Transformation"
            />
          </div>
        </div>

        {/* BOTTOM TRUST / STATS STRIP */}

        <div className="home-stats-strip">
          <div className="home-mini-stat">
            <strong>20+</strong>

            <span>
              Years of
              <br />
              Experience
            </span>
          </div>

          <div className="home-mini-stat">
            <strong>500+</strong>

            <span>
              Businesses
              <br />
              Impacted
            </span>
          </div>

          <div className="home-mini-stat">
            <strong>100+</strong>

            <span>
              AI Solutions
              <br />
              Delivered
            </span>
          </div>

          <div className="home-mini-stat">
            <strong>50+</strong>

            <span>
              Industry
              <br />
              Experts
            </span>
          </div>

          <div className="home-mini-stat">
            <strong>∞</strong>

            <span>
              End-to-End
              <br />
              Transformation
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
