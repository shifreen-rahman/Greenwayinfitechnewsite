import { Link } from "react-router-dom";

const services = [
  {
    icon: "◌",
    title: "AI Automation",
    text: "Automate repetitive tasks and streamline operations with intelligent AI solutions.",
  },
  {
    icon: "▥",
    title: "Data Science",
    text: "Extract meaningful insights from data and drive smarter business decisions.",
  },
  {
    icon: "▣",
    title: "AI Chatbots",
    text: "Build intelligent, conversational AI agents that engage customers 24/7.",
  },
  {
    icon: "◎",
    title: "AI Digital Marketing",
    text: "AI-powered marketing strategies that boost engagement and deliver measurable results.",
  },
  {
    icon: "♧",
    title: "Business Consulting",
    text: "Strategic guidance to innovate, transform and achieve sustainable growth.",
  },
  {
    icon: "◇",
    title: "Industry Training",
    text: "Future-ready training programs in AI, Data Science, DevOps and emerging technologies.",
  },
  {
    icon: "</>",
    title: "Software Development",
    text: "Custom software solutions designed to solve real-world business challenges.",
  },
  {
    icon: "☁",
    title: "Cloud Solutions",
    text: "Scalable and secure cloud solutions to modernize your infrastructure.",
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
          <div className="section-label">OUR SERVICES</div>

          <h1>AI-Powered Solutions for Every Business Need</h1>

          <p>
            We empower businesses to innovate, automate, and grow with
            intelligent solutions designed for the future.
          </p>
        </div>

        {/* =========================
            SERVICE CARDS
        ========================= */}

        <div className="services-cards">
          {services.map((service, index) => (
            <div className="service-card tech-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h2>{service.title}</h2>

              <p>{service.text}</p>

              <Link to="/contact" className="service-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="services-cta">
          <div className="services-cta-content">
            <h2>Ready to Transform Your Business?</h2>

            <p>
              Let's build intelligent solutions that drive growth and create
              lasting impact.
            </p>

            <Link to="/contact" className="btn-green">
              Book Free Consultation
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
