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
              We Make Business Smarter,
              <br />
              Simpler, <span>And More Effecient</span>
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
            <div className="why-card-image">
              <img
                src="/images/about-automation.png"
                alt="Simplify and Automate Your Operations"
              />
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
            <div className="why-card-image">
              <img
                src="/images/about-data.png"
                alt="Turn Data into Better Decisions"
              />
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
            <div className="why-card-image">
              <img
                src="/images/about-ai.png"
                alt="Build Intelligent Business Solutions"
              />
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
            <div className="why-card-image">
              <img
                src="/images/about-strategy.png"
                alt="Solve the Right Business Problem"
              />
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
            <div className="why-card-image">
              <img
                src="/images/about-reliable.png"
                alt="Create Reliable Technology Foundations"
              />
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
            <div className="why-card-image">
              <img
                src="/images/about-cloud.png"
                alt="Deliver Practical, Measurable Results"
              />
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
