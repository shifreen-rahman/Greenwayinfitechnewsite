import { Link } from "react-router-dom";

const trainingPrograms = [
  {
    icon: "◉",
    title: "AI & Machine Learning",
    text: "Master the concepts of AI, Generative AI, Artificial Intelligence and Machine Learning.",
  },
  {
    icon: "◌",
    title: "Data Science",
    text: "Learn data analysis, visualization, and ML techniques to make smarter decisions.",
  },
  {
    icon: "▣",
    title: "AI Chatbots",
    text: "Build intelligent chatbots using modern AI, LLM and chatbot technologies.",
  },
  {
    icon: "♧",
    title: "AI Digital Marketing",
    text: "Learn AI-powered marketing strategies for effective engagement and conversions.",
  },
  {
    icon: "⌁",
    title: "DevOps",
    text: "Learn CI/CD, Docker, Kubernetes, and cloud technologies to automate software delivery.",
  },
  {
    icon: "◇",
    title: "Industry Training",
    text: "Customized corporate training programs tailored to industry needs.",
  },
  {
    icon: "✦",
    title: "Expert Trainers",
    text: "Industry professionals with real-world experience.",
  },
  {
    icon: "✓",
    title: "Certification",
    text: "Recognized certificates to boost your career.",
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
              INDUSTRY-READY TRAINING PROGRAMS
            </div>

            <h1>
              Future-Ready Skills for
              <br />
              Tomorrow's Opportunities
            </h1>

            <p>
              Our training programs are designed to equip you with in-demand
              skills in AI, Data Science, DevOps, and emerging technologies.
            </p>

            {/* TRAINING CARDS */}

            <div className="training-cards">
              {trainingPrograms.map((program, index) => (
                <div className="training-card" key={index}>
                  <div className="training-card-icon">{program.icon}</div>

                  <div>
                    <h2>{program.title}</h2>

                    <p>{program.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="training-visual">
            <div className="training-image-glow"></div>

            <img src="/images/training-book.png" alt="Future Ready Training" />
          </div>
        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="training-cta">
          <div className="training-cta-icon">◉</div>

          <div className="training-cta-text">
            <h2>
              Invest in Skills Today.
              <span> Lead Tomorrow.</span>
            </h2>

            <p>
              Build your future with the right skills and become industry-ready.
            </p>
          </div>

          <Link to="/contact" className="btn-green">
            Book Free Consultation
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Training;
