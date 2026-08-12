import { Link } from "react-router-dom";

const blogPosts = [
  {
    image: "/images/blog-ai.png",
    category: "AI & BUSINESS",
    date: "May 10, 2024",
    title: "The Future of AI in Business: Trends to Watch",
  },
  {
    image: "/images/blog-chatbot.png",
    category: "AI CHATBOTS",
    date: "May 03, 2024",
    title: "How AI Chatbots Improve Customer Experience",
  },
  {
    image: "/images/blog-data.png",
    category: "DATA SCIENCE",
    date: "Apr 28, 2024",
    title: "Data Science: Turning Data into Business Value",
  },
  {
    image: "/images/blog-marketing.png",
    category: "MARKETING",
    date: "Apr 20, 2024",
    title: "AI in Digital Marketing: Smarter Campaigns",
  },
  {
    image: "/images/blog-devops.png",
    category: "DEVOPS",
    date: "Apr 15, 2024",
    title: "The Role of DevOps in Modern Software Delivery",
  },
  {
    image: "/images/blog-automation.png",
    category: "AUTOMATION",
    date: "Apr 10, 2024",
    title: "Why Businesses Need AI Automation Now",
  },
];

function Blog() {
  return (
    <main className="blog-page">
      {/* =========================
          BLOG HEADER
      ========================= */}

      <section className="blog-hero">
        <div className="blog-grid"></div>

        <div className="blog-header">
          <div className="section-label">OUR BLOG</div>

          <h1>Insights, Trends & Innovations</h1>

          <p>
            Stay updated with the latest insights, trends, and innovations in
            AI, Data Science, and Digital Transformation.
          </p>
        </div>

        {/* =========================
            BLOG CARDS
        ========================= */}

        <div className="blog-cards">
          {blogPosts.map((post, index) => (
            <article className="blog-card" key={index}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>{post.category}</span>

                  <small>{post.date}</small>
                </div>

                <h2>{post.title}</h2>

                <Link to="/contact" className="blog-read">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            VIEW MORE
        ========================= */}

        <div className="blog-more">
          <Link to="/contact" className="blog-more-button">
            View More Posts
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Blog;
