import { Link } from "react-router-dom";

const trainingPrograms = [
  {
    image: "/training-cards/01-artificial-intelligence.png",
    alt: "Artificial Intelligence",
  },
  {
    image: "/training-cards/02-data-science.png",
    alt: "Data Science",
  },
  {
    image: "/training-cards/03-machine-learning.png",
    alt: "Machine Learning",
  },
  {
    image: "/training-cards/04-ai-powered-devops.png",
    alt: "AI-Powered DevOps",
  },
  {
    image: "/training-cards/05-ai-powered-digital-marketing.png",
    alt: "AI-Powered Digital Marketing",
  },
  {
    image: "/training-cards/06-ai-agent-engineering.png",
    alt: "AI Agent Engineering",
  },
  {
    image: "/training-cards/07-rag-engineering.png",
    alt: "RAG Engineering",
  },
  {
    image: "/training-cards/08-generative-ai-engineering.png",
    alt: "Generative AI Engineering",
  },
];

function Training() {
  return (
    <main className="training-page">
      {/* =========================
          TRAINING HERO
      ========================= */}

      <section className="training-hero">
        <div className="training-grid"></div>

        <div className="training-container">
          {/* LEFT SIDE */}

          <div className="training-content">
            <div className="section-label">
              Industry-Ready AI & Technology Experience
            </div>

            <h1>
              Build Skills. Work on Real Projects.
              <br />
              Become Industry-Ready.
            </h1>

            <p>
              Gain hands-on experience through real-world projects, guided
              learning, and practical exposure across AI, Data Science, Machine
              Learning, DevOps, and emerging technologies.
              <br />
              Build the skills, portfolio, and confidence needed to contribute
              in today’s technology driven professional environment.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}

          <div className="training-visual">
            <div className="training-image-glow"></div>
          </div>
        </div>

        {/* =========================
            WHAT WE DO
        ========================= */}

        <div className="training-section-heading">
          <div className="section-label">WHAT WE DO</div>

          <h2>Technology Solutions That Drive Smarter Business Outcomes</h2>
        </div>

        {/* =========================
            TRAINING PROGRAM CARDS
        ========================= */}

        <div className="training-cards">
          {trainingPrograms.map((program, index) => (
            <div className="training-card" key={index}>
              <img src={program.image} alt={program.alt} />
            </div>
          ))}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="training-cta">
          <div className="training-cta-icon">◉</div>

          <div className="training-cta-text">
            <h2>
              Continue Your Internship
              <span> Continue Your Journey.</span>
            </h2>

            <p>
              Your learning does not have to stop when your internship ends.
              Stay connected for continued guidance,
              <br />
              project support, and opportunities to strengthen your technical
              capabilities.
            </p>
          </div>

          <Link to="/contact" className="btn-green">
            Explore Internship Opportunities
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Training;
