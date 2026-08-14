import { Link } from "react-router-dom";

const blogPosts = [
  {
    image: "/images/blog-ai.png",
    category: "AI & BUSINESS",
    title: "How AI Is Changing the Way Businesses Work",
    detail:
      "Explore how businesses are using AI to automate work, improve decisions, and create new opportunities.",
  },
  {
    image: "/images/blog-chatbot.png",
    category: "Customer Experience",
    title: "How AI Is Changing Customer Experience",
    detail:
      "Discover how AI assistants, personalization, and intelligent automation are helping businesses serve customers better.",
  },
  {
    image: "/images/blog-data.png",
    category: "Data & Decisions",
    title: "From Business Data to Better Decisions",
    detail:
      "See how businesses can turn everyday data into insights that reveal patterns, opportunities, and smarter decisions.",
  },
  {
    image: "/images/blog-marketing.png",
    category: "AI-Powered Marketing",
    title: "How AI Is Making Marketing Smarter",
    detail:
      "Explore how AI can help businesses understand customers, create better campaigns, and improve marketing performance.",
  },
  {
    image: "/images/blog-devops.png",
    category: "DevOps & Technology",
    title: "How AI Is Changing Software Delivery",
    detail:
      "Discover how AI and modern DevOps practices are helping teams build, test, deploy, and manage technology more efficiently.",
  },
  {
    image: "/images/blog-automation.png",
    category: "Business Automation",
    title: "Where AI Can Automate Your Business",
    detail:
      "Explore everyday business tasks and processes where AI can reduce manual work, improve efficiency, and free your team for higher-value work.",
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

          <h1>Ideas, Insights & What’s Next in Technology</h1>

          <p>
            Discover practical ideas, emerging trends, and real-world
            applications showing how AI, data, and technology are transforming
            the way businesses work, make decisions, and grow.
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
                </div>

                <h2>{post.title}</h2>

                <p className="blog-detail">{post.detail}</p>

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
