import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 1️⃣ S&N Textiles */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Data Engineer</h4>
                <h5>S&N Textiles Private Ltd · Part-time</h5>
              </div>
              <h3>Mar 2025 — Present</h3>
            </div>
            <p>
              Working remotely on ERP data systems for a textile manufacturing
              company. Designing and organizing operational data across
              inventory, accounting, CRM, HR, sales, and factory workflows.
              Helping map business processes into Odoo ERP structures to improve
              reporting, inventory tracking, cost records, and decision-making.
            </p>
          </div>

          {/* 2️⃣ DevelopersHub */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer & Analyst</h4>
                <h5>DevelopersHub Corporation · Internship</h5>
              </div>
              <h3>Apr 2026 — Present</h3>
            </div>
            <p>
              Working as a Data Engineer and Analyst Intern, focused on
              practical analytics workflows, data processing, reporting, and
              business-facing data solutions. Supporting data engineering tasks,
              analysis, and structured problem solving for real-world projects.
            </p>
          </div>

          {/* 3️⃣ Tekvion Solutions */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Tekvion Solutions · Internship</h5>
              </div>
              <h3>Jan 2026 — Present</h3>
            </div>
            <p>
              Working as a Full-Stack Developer specializing in the MERN stack
              and Bubble.io. Building scalable web and mobile applications for
              international clients, covering responsive React interfaces,
              Node.js APIs, MongoDB-backed systems, and deployable digital
              products.
            </p>
          </div>

          {/* 4️⃣ eCom Sellers */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>eCom Sellers · Contract</h5>
              </div>
              <h3>Aug 2025 — Nov 2025</h3>
            </div>
            <p>
              Worked on a data-driven eCommerce intelligence platform. Designed,
              fixed, and monitored ETL pipelines for Walmart marketplace data,
              including scraping, ingestion, cleaning, validation, normalization,
              PostgreSQL storage, API integrations, and analytics-ready outputs
              for web app and browser extension features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;