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
              WE MAKE BUSINESS SMARTER,
              <br />
              SIMPLER, <span>AND MORE EFFICIENT</span>
            </h1>

            <p>
              We help businesses simplify everyday operations and move forward
              with confidence. We automate repetitive tasks and streamline
              workflows, giving your team more time for meaningful work. We turn
              business data into clear insights for better decisions. We find
              opportunities to improve efficiency, enhance customer experiences,
              and unlock growth.
            </p>

            <p>
              We build practical AI solutions around your people not instead of
              them so your business can achieve more.
            </p>

            <Link to="/contact" className="btn-green about-button">
              Discover GreenWay InfiTech
              <span>→</span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}

          <div className="about-visual">
            <div className="about-image-glow"></div>
          </div>
        </div>
      </section>

      {/* =====================================================
    WHY GREENWAY INFITECH
===================================================== */}

      <section className="why-greenway">
        <div className="why-greenway-header">
          <div className="why-eyebrow">
            <span></span>
            WHY GREENWAY INFITECH?
            <span></span>
          </div>

          <h2>What Can GreenWay Infitech Do for Your Business?</h2>

          <p>
            We identify where your business is losing time, money, or clarity
            and build practical technology solutions that help you work smarter,
            make better decisions, and grow with confidence.
          </p>
        </div>

        <div className="why-greenway-cards">
          {/* CARD 1 */}

          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 64 64">
                <path d="M32 8 L37 25 L56 32 L37 39 L32 56 L27 39 L8 32 L27 25 Z" />
              </svg>
            </div>

            <h3>
              Simplify and
              <span>Automate</span>
              <span>Your Operations</span>
            </h3>

            <div className="why-divider"></div>

            <p>
              We automate repetitive tasks and streamline workflows, helping
              your team reduce manual effort and focus on higher value work.
            </p>

            <button className="why-arrow">→</button>
          </div>

          {/* CARD 2 */}

          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 64 64">
                <path d="M8 22 H25 L37 32 L25 42 H8" />
                <path d="M25 22 H40 L56 32 L40 42 H25" />
              </svg>
            </div>

            <h3>
              Turn Data into
              <span>Better Decisions</span>
            </h3>

            <div className="why-divider"></div>

            <p>
              We transform complex business data into clear insights that help
              you understand performance, identify opportunities, and make
              confident decisions.
            </p>

            <button className="why-arrow">→</button>
          </div>

          {/* CARD 3 */}

          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 64 64">
                <polygon points="32,8 49,18 49,46 32,56 15,46 15,18" />
                <rect x="25" y="25" width="14" height="14" />
              </svg>
            </div>

            <h3>
              Build Intelligent
              <span>Business Solutions</span>
            </h3>

            <div className="why-divider"></div>

            <p>
              We use AI and Machine Learning to create smarter tools, predictive
              systems, and solutions tailored to your business needs.
            </p>

            <button className="why-arrow">→</button>
          </div>

          {/* CARD 4 */}

          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="16" />
                <circle cx="32" cy="32" r="6" />
                <path d="M32 5 V16" />
                <path d="M32 48 V59" />
                <path d="M5 32 H16" />
                <path d="M48 32 H59" />
              </svg>
            </div>

            <h3>
              Solve the Right
              <span>Business Problem</span>
            </h3>

            <div className="why-divider"></div>

            <p>
              We begin with your goals and challenges not with technology for
              its own sake. We recommend and implement solutions that are
              practical, relevant, and aligned with your operations.
            </p>

            <button className="why-arrow">→</button>
          </div>

          {/* CARD 5 */}

          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 64 64">
                <path d="M32 7 L52 15 V30 C52 43 43 52 32 57 C21 52 12 43 12 30 V15 Z" />
                <path d="M22 32 L29 39 L43 24" />
              </svg>
            </div>

            <h3>
              Create Reliable
              <span>Technology Foundations</span>
            </h3>

            <div className="why-divider"></div>

            <p>
              Through DevOps and modern engineering practices, we help make your
              systems more scalable, secure, stable, and efficient.
            </p>

            <button className="why-arrow">→</button>
          </div>

          {/* CARD 6 */}

          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 64 64">
                <path d="M16 45 C10 42 9 34 14 30 C12 20 20 14 28 17 C33 8 48 11 49 22 C57 23 59 34 52 39 C49 42 44 44 39 44 H20" />
                <path d="M29 35 L42 22" />
                <path d="M42 22 H35" />
                <path d="M42 22 V29" />
              </svg>
            </div>

            <h3>
              Deliver Practical,
              <span>Measurable Results</span>
            </h3>

            <div className="why-divider"></div>

            <p>
              Our focus is not merely on implementing technology. We focus on
              outcomes such as reduced costs, improved productivity, faster
              processes, stronger operations, and sustainable growth.
            </p>

            <button className="why-arrow">→</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
