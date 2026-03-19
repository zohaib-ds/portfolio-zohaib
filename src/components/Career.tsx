import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 1️⃣ eCommerce Data Engineer */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>eCom Sellers · Full Time</h5>
              </div>
              <h3>Aug 2025 — Nov 2025</h3>
            </div>
            <p>
              Built and maintained end-to-end data pipelines for an eCommerce intelligence platform.
              Handled large-scale Walmart data scraping, ingestion, cleaning, and transformation into
              analytics-ready datasets. Worked with ETL pipelines, PostgreSQL, and backend services
              to ensure reliable data flow. Contributed to web app and browser extension features
              that surfaced insights directly to users.
            </p>
          </div>

          {/* 2️⃣ Orderly Project */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & Data Systems</h4>
                <h5>Orderly (POS Platform)</h5>
              </div>
              <h3>Nov 2025 — Present</h3>
            </div>
            <p>
              Working on a cloud-based POS system for restaurants, handling data systems,
              backend logic, and platform features. Built modules for inventory, vendor
              management, accounting, and analytics dashboards. Contributed to marketplace
              features, delivery workflows, and scalable architecture for real-world usage.
            </p>
          </div>

          {/* 3️⃣ ERP / Textile */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>S&N Textiles · Part-time</h5>
              </div>
              <h3>Mar 2025 — Present</h3>
            </div>
            <p>
              Working on ERP data systems for a textile manufacturing company. Structured
              and managed data across inventory, accounting, CRM, and HR modules. Helped
              translate business workflows into scalable data models using Odoo, improving
              data visibility and operational tracking.
            </p>
          </div>

          {/* 4️⃣ Walmart Scraper System */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineering Project</h4>
                <h5>Walmart Scraper System</h5>
              </div>
              <h3>2026 — Ongoing</h3>
            </div>
            <p>
              Building a scalable data scraping system combining Python and a Chrome extension
              to collect large-scale Walmart product data. Designed a queue-based pipeline
              with deduplication, automated crawling, and real-time data storage. Currently
              optimizing performance, anti-block strategies, and preparing for analytics use cases.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
