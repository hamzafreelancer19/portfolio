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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building full-stack web applications using React, Node.js, Express, and Next.js. Developing responsive user interfaces and robust backend services. Working with MongoDB for database design and optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Skilled in React, Node.js, Express, Next.js</h5>
              </div>
              <h3>Core Stack</h3>
            </div>
            <p>
              Proficient in building scalable web applications with modern technologies. Experience with React for dynamic user interfaces, Node.js and Express for server-side development, and MongoDB for database management. Also experienced with Next.js for full-stack applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Development</h4>
                <h5>React & Next.js</h5>
              </div>
              <h3>Expertise</h3>
            </div>
            <p>
              Building responsive, accessible, and performant web applications. Experience with component-based architecture, state management, and modern CSS practices. Proficient with React hooks and Next.js features like SSR and SSG.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
