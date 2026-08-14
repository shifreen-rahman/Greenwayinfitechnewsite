import { Link } from "react-router-dom";

const trainingPrograms = [
  {
    icon: "◉",
    title: "Artificial Intelligence",
    text: "Build practical AI solutions and gain hands-on experience applying intelligent technologies to real-world business challenges.",
  },
  {
    icon: "◌",
    title: "Data Science",
    text: "Work with real-world data to uncover insights, identify patterns, and support smarter business decisions.",
  },
  {
    icon: "▣",
    title: "Machine Learning",
    text: "Build and work with models that learn from data to predict outcomes, identify patterns, and solve real-world problems.",
  },
  {
    icon: "♧",
    title: "AI-Powered DevOps",
    text: "Apply AI across DevOps workflows to build, test, deploy, and manage software more efficiently.",
  },
  {
    icon: "⌁",
    title: "AI-Powered Digital Marketing",
    text: "Use AI to understand audiences, create smarter campaigns, personalize experiences, and improve marketing performance.",
  },
  {
    icon: "◇",
    title: "AI Agent Engineering",
    text: "Build intelligent AI agents that can understand goals, use tools, perform tasks, and work through real business processes.",
  },
  {
    icon: "✦",
    title: "RAG Engineering",
    text: "Build AI applications that connect with trusted knowledge to deliver relevant, accurate, and context-aware responses.",
  },
  {
    icon: "✓",
    title: "Generative AI Engineering",
    text: "Gain practical experience building applications with modern generative AI to create, understand, and work with content.",
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
              <div className="training-card-icon">{program.icon}</div>

              <div className="training-card-content">
                <h2>{program.title}</h2>

                <div className="training-card-line"></div>

                <p>{program.text}</p>
              </div>
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
              Build Experience Today.
              <span> Shape Your Future Tomorrow.</span>
            </h2>

            <p>
              Gain practical experience, work on real-world projects, and build
              the skills needed to become industry-ready.
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
