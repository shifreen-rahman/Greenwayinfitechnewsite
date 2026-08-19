import { Link } from "react-router-dom";

const services = [
  {
    image: "/images/ai-business-automation.png",
    title: "AI & Business Automation",
    text: "Automate repetitive work, streamline workflows, and help your teams accomplish more with intelligent AI-powered solutions.",
  },
  {
    image: "/images/machine-learning.png",
    title: "Machine Learning Solutions",
    text: "Build intelligent systems that learn from your business data to predict outcomes, generate recommendations, classify information, and support better decisions.",
  },
  {
    image: "/images/data-science.png",
    title: "Data Science & Analytics",
    text: "Turn complex business data into clear insights, uncover meaningful patterns, and identify opportunities for smarter decision-making.",
  },
  {
    image: "/images/ai-chatbots.png",
    title: "AI Chatbots & Intelligent Assistants",
    text: "Create intelligent assistants that support customers, empower employees, and strengthen business operations around the clock.",
  },
  {
    image: "/images/custom-ai-solutions.png",
    title: "Custom AI Business Solutions",
    text: "Design and develop practical AI solutions around your unique challenges—from everyday processes to complex business operations.",
  },
  {
    image: "/images/devops-cloud.png",
    title: "DevOps & Cloud Engineering",
    text: "Build reliable, scalable, and efficient technology environments that help your applications perform securely and your business operate smoothly.",
  },
  {
    image: "/images/ai-digital-marketing.png",
    title: "AI-Powered Digital Marketing",
    text: "Use AI to understand your audience, create smarter campaigns, personalize customer experiences, and improve marketing performance.",
  },
  {
    image: "/images/ai-strategy.png",
    title: "AI Strategy & Consulting",
    text: "Identify where AI, data, automation, and modern technology can create the greatest value for your business and define a practical path forward.",
  },
];

function Services() {
  return (
    <main className="services-page">
      {/* =========================
          SERVICES HERO
      ========================= */}

      <section className="services-hero">
        <div className="services-grid"></div>

        <div className="services-header">
          <div className="section-label">OUR SOLUTIONS</div>

          <h1>Technology That Solves Real Business Problems</h1>

          <p>
            From AI, Machine Learning, and automation to Data Science and
            DevOps, we build practical technology solutions aligned with your
            business needs helping you work smarter, operate more efficiently,
            and grow with confidence.
          </p>
        </div>

        {/* =========================
            SERVICE CARDS
        ========================= */}

        <div className="services-cards">
          {services.map((service, index) => (
            <div className="service-card tech-card" key={index}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-card-content">
                <h2>{service.title}</h2>

                <p>{service.text}</p>

                <Link to="/contact" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="services-cta">
          <div className="services-cta-content">
            <h2>
              Have a Business Challenge? Let’s Solve It Together.
              <br />
              Your First Consultation Is Complimentary.
            </h2>

            <p>
              Tell us what’s slowing your business down. We’ll explore how AI,
              data, automation,
              <br /> and modern technology can help you work smarter, operate
              more efficiently,
              <br />
              and move forward with confidence.
            </p>

            <Link to="/contact" className="btn-green">
              Start a Free Conversation
              <span>→</span>
            </Link>
          </div>

          <div className="services-cta-image">
            <img src="/images/services-ai.png" alt="AI Solutions" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
